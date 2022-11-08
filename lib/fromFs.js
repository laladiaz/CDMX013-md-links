const fs = require('fs');

// Checks if the path given is directory
const isAFolder = (dirName) => fs.lstatSync(dirName).isDirectory();
//Read a dir synchronously
const readDir = (dirName) => fs.readdirSync(dirName, { withFileTypes: true });
// Reads a file synchronously
const readFile = (file) => fs.readFileSync(file, 'utf-8');
//
const isReal = (file) => fs.existsSync(file);

module.exports = {
    isAFolder,
    readDir,
    readFile,
    isReal
}