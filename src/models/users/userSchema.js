(function() {
  'use strict';
  module.exports = {
    id: ['number'],
    name: ['string', 'required'],
    dob: ['date', 'required'],
    email: ['email', 'required'],
    aadhaarNumber: ['number', 'required'],
    registeredDate: ['date'],
    assignedMobileNumber: ['phone'],
    planId: ['number']
  };
}())