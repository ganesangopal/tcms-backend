(function() {
  'use strict';

  const fs = require('fs');
  const path = require('path');
  const { v4 } = require('uuid');
  let users = require('../models/users/users.json');
  const generateMobNum = require('../utilities/generateMobileNumber');
  exports.getUsers = () => {
    try {
      if (users && users.length > 0) {
        return users;
      } else {
        return [];
      }
    } catch(err) {
      throw err;
    }
  };

  exports.updateUser = (id, body) => {
    try {
      if (body && body.planId) {
        let updatedUserData = users.map(user => {
          if (user.id === id) {
            user.planId = body.planId;
          }
          return user;
        });
        fs.writeFileSync(path.join(process.cwd(), 'src/models/users/users.json'), JSON.stringify(updatedUserData, null, 2));
        return updatedUserData;
      }
    } catch(err) {
      throw err;
    }
  }

  exports.createUser = (userData) => {
    try {
      if (userData) {
        userData.id = v4();
        userData.registeredDate = new Date();
        userData.assignedMobileNumber = generateMobNum();
        if (users && users.length > 0) {
          users.push(userData);
        } else {
          users = [userData];
        }
        fs.writeFileSync(path.join(process.cwd(), 'src/models/users/users.json'), JSON.stringify(users, null, 2));
        return userData;
      }
    } catch(err) {
      throw err;
    }
  }


}())