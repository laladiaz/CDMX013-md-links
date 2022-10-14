const fs = require('fs');
const path = require('path');

// Checks if the path is absolute
const isAbsolutePath = (dirName) => path.isAbsolute(dirName);
// Resolve the path to make it absolute
const resolvePath = (dirName) => path.resolve(dirName);
// Checks if the path given is directory
const isAFolder = (dirName) => fs.lstatSync(dirName).isDirectory();
// Recursive function to get the content of a directory
const folderContent = (dirName) => {
    let files = [];
    const items = fs.readdirSync(dirName, { withFileTypes: true });
    items.forEach((item) => {
      const pathW = path.join(dirName, item.name);
      item.isDirectory() ? files = [...files, ...folderContent(pathW)] : files.push(pathW);
    });
    return files;
  }
  // get the .md file
 const mdExtName = (dirName) => path.extname(dirName);
 // read file
 const readMdFile = (dirName) => fs.readFileSync(dirName, 'utf-8');

module.exports = {
    folderContent,
    isAbsolutePath,
    resolvePath,
    isAFolder,
    mdExtName,
    readMdFile
}