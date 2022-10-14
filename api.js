const fs = require('fs');
const path = require('path');

// Recursive function
const recursive = (dirName) => {
  let files = [];
  const items = fs.readdirSync(dirName, { withFileTypes: true });
  items.forEach((item) => {
    const pathW = path.join(dirName, item.name);
    item.isDirectory() ? files = [...files, ...recursive(pathW)] : files.push(pathW);
  });
  return files;
}

module.exports = mdLinks = (filePath) => {
    //check if filePath is absolute or relative -> if crash do it
    //if the path given is a file
    //if the path given is a directory
    // get the directory content
    let dirFiles = [];
    fs.lstatSync(filePath).isDirectory() ? dirFiles = [...dirFiles, ...recursive(filePath)] : dirFiles.push(filePath);
    // const dirFiles = recursive(filePath);

    console.log(dirFiles.length);

    // get the .md file
    const fileArray = dirFiles.filter(file => {
        if (path.extname(file) == ".md") {
          return file;
        }
      })
    // const fileToWork = fileArray.toString();

    const content = fileArray.forEach((file) => {

        console.log(fs.readFileSync(file, 'utf-8'))
        console.log();
      })

      return fileArray;
  };
  //console.log(MDLinks('/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links'));