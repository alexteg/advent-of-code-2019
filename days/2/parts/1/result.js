const calculateIntcodes = require('.');

const intsInput = require('../../input');
intsInput[1] = 12;
intsInput[2] = 2;

module.exports = calculateIntcodes(intsInput)[0];
