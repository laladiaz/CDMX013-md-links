const fs = require('fs');
const path = require('path');
// const functions = require('./functions.js');

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

module.exports = mdLinks = (filePath) => {
  // create the return promise function
    //check if filePath is absolute or relative
    const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(filePath);
    console.log (absolutePath)
    // if the path given is a directory, get the directory content, if the path given is a file, does not enter the recursive function
    let dirFiles = [];
    fs.lstatSync(absolutePath).isDirectory() ? dirFiles = [...dirFiles, ...folderContent(absolutePath)] : dirFiles.push(absolutePath);
    // get the .md file
    const fileArray = dirFiles.filter(file => {
        if (path.extname(file) == ".md") {
          return file;
        }
      })
    fileArray.forEach((file) => {
      // read the files
      const content = fs.readFileSync(file, 'utf-8');
      // obtain the urls
      const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
      const linksFound = content.match(regExp);
      console.log(linksFound);
      // ensambles the array of objects
      const arrayOfObject = [];

      })
      return fileArray;
  };
