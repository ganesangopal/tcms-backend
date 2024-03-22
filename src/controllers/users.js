(function() {
  'use strict';
  const userService = require('../services/users');
  exports.getUsers = (req, res) => {
    try {
      let users = userService.getUsers();
      res.status(200).send(users);
    } catch(err) {
      res.status(500).send({message: 'Something went wrong'});
    }
  };

  exports.getUser = (req, res) => {
    try {
      let id = req.params.id;
      let populate = req.query.populate;
      let options = {
        id: id,
        populate: populate
      }
      let user = userService.getUser(options);
      res.status(200).send(user);
    } catch(err) {
      res.status(500).send({message: 'Something went wrong'});
    }
  };

  exports.updateUser = (req, res) => {
    try {
      let userId = req.params.id;
      let users = userService.updateUser(userId, req.body);
      res.status(200).send(users);
    } catch(err) {
      res.status(500).send({message: 'Something went wrong'});
    }
  };

  exports.createUser = (req, res) => {
    let payload = req.body;
    if (payload.aadhaarNumber && payload.aadhaarNumber.length !== 12) {
      return res.status(400).send({message: 'Please enter valid aadhaar number'});
    }
    let userData = payload;
    try {
      let user = userService.createUser(userData);
      res.status(201).send(user);
    } catch(err) {
      res.status(500).send({message: 'Something went wrong'});
    }
  };
}())