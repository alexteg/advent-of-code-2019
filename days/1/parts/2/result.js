const { getModulesFuel } = require('../1');
const { getCompoundFuel } = require('./');
const modulesMasses = require('../../input');

const modulesFuel = getModulesFuel(modulesMasses);

module.exports = getCompoundFuel(modulesFuel).reduce((a, b) => a + b, 0);
