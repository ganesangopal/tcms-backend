(function() {
  'use strict';
  const constants = require('./constants');
  module.exports = () => {
    const getRandomNum = () => {
      return Math.floor(100000 + Math.random() * 900000);
    }

    const getCountryCode = () => {
      return constants.COUNTRY_CODE;
    }

    const getMobilePrefixCode = () => {
      return constants.MOBILE_PREFIX_CODE;
    }

    return getCountryCode() + getMobilePrefixCode() + getRandomNum();
  }
}())