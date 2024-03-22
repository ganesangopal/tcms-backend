(function() {
  'use strict';
  const validator = require('../../utilities/validator');
  const userSchema = require('../../models/users/userSchema');

  module.exports = (req, res, next) => {
    try {
      let body = req.body;
      let fields = Object.keys(body);
      for (let field in userSchema) {
        if (userSchema[field][1] === 'required' && !body[field]) {
          return res.status(400).send({message: 'Bad Request'});
        }
        if (body[field]) {
          let isValid = validator(body[field], userSchema[field][0]);
          if (!isValid) {
            return res.status(400).send({message: `Invalid input for field ${field}`})
          }
        }
      }
      fields.forEach(field => { 
        
      });
      next();
    } catch(err) {
      return res.send(500, {message: 'Something went wrong'});
    }
  }
}());