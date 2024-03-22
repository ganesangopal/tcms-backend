(function() {
  'use strict';
  const express = require('express');
  const router = express.Router();
  const users = require('../controllers/users');
  const validator = require('../middlewares/users/inputValidator');
  router.route('/list')
    .get(users.getUsers);
  router.route('/create')
    .post(validator, users.createUser);
  router.route('/:id')
    .put(users.updateUser);
  module.exports = router;
}())