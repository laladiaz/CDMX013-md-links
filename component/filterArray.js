const { extensionName } = require('../lib/fromPath.js');

// get the .md file
const filteredArray = (dirPath) => dirPath.filter(file => (extensionName(file) == ".md"));

module.exports = {
    filteredArray
}