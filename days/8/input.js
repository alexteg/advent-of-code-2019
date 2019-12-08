const fs = require('fs');
var path = require('path');

// Get input
const inputFilePath = path.join(__dirname, 'input.txt');
const inputText = fs.readFileSync(inputFilePath, 'utf8');;

module.exports = inputText.trim();
