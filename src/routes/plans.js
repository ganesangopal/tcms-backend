(function() {
  'use strict';
  const express = require('express');
  const router = express.Router();
  const plans = require('../controllers/plans');
  router.route('/list')
    .get(plans.getPlans);

  router.route('/:id')
    .get(plans.getPlan);
  module.exports = router;
}())