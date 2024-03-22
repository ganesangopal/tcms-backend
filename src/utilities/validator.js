(function() {
  'use strict';
  const validator = require('validator');

  module.exports = (value, validatorType) => {
    let isValid = false;
    switch (validatorType) {
      case 'string':
        isValid = validator.isAlphanumeric(value);
        break;
      case 'number':
        isValid = validator.isNumeric(value);
        break;
      case 'email':
        isValid = validator.isEmail(value);
        break;
      case 'phone':
        isValid = validator.isMobilePhone(value);
        break;
      case 'date':
        isValid = validator.isDate(value);
        break;
    }
    return isValid;
  }
}())