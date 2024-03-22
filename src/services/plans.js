(function() {
  'use strict';

  const plans = require('../models/plans/plans.json');
  exports.getPlans = () => {
    try {
      if (plans && plans.length > 0) {
        return plans;
      } else {
        return [];
      }
    } catch(err) {
      throw err;
    }
  };

  exports.getPlan = (id) => {
    try {
      if (plans && plans.length > 0) {
        let plan = plans.find(plan => plan.id === parseInt(id));
        return plan;
      } else {
        return '';
      }
    } catch(err) {
      throw err;
    }
  };


}())