(function() {
  'use strict';
  const bodyParser = require('body-parser');
  const userRoutes = require('../routes/users');
  const planRoutes = require('../routes/plans');
  module.exports = (app) => {
    app.use(bodyParser.json());
    app.use('/api/users', userRoutes);
    app.use('/api/plans', planRoutes);
  }
}())