(function() {
  'use strict';
  const planService = require('../services/plans');
  exports.getPlans = (req, res) => {
    try {
      let plans = planService.getPlans();
      res.status(200).send(plans);
    } catch(err) {
      res.status(500).send({message: 'Something went wrong'});
    }
    
  };

  exports.getPlan = (req, res) => {
    try {
      let id = req.params.id;
      let plan = planService.getPlan(id);
      res.status(200).send(plan);
    } catch(err) {
      res.status(500).send({message: 'Something went wrong'});
    }
    
  };

}())