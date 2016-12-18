'use strict';

const uuid = require('uuid');

module.exports = {
  'dbUrl': 'mongodb://admin:password@ds139278.mlab.com:39278/boozehound',
  'secretKey': uuid.v4()
};
