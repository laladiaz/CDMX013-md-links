const fs = require('fs');
const path = require('path');

module.exports = mdLinks = (dirName) => {
    //if the path given is a file
    //if the path given is a directory
    // get the directory content
    let files = [];
    const items = fs.readdirSync(dirName, { withFileTypes: true });
    items.map((item) => {
      const pathW = path.join(dirName, item.name);
      return item.isDirectory() ? files = [...files, ...mdLinks(pathW)] : files.push(pathW);
    });
    // get the .md file
    const fileArray = files.filter(file => {
        if (path.extname(file) == ".md") {
          return file;
        }
      })
    const fileToWork = fileArray.toString();

   const content = fs.readFile(fileToWork, 'utf8', (err, data) => {
        if (!err) {
        return console.log(data);
        }
      });

   //const data = fs.readFileSync(fileArray, {encoding:'utf8', flag:'r'});

      return fileToWork;
  };
  //console.log(MDLinks('/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links'));