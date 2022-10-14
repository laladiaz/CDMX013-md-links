/* const fs = require('fs');
const path = require('path'); */
const mdLinks = require('./api.js')
const isMd = 'README.md';
const folder = '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links';

// Read a file

/* fs.readFile(isMd, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
}); */

// Obtain the directory content

/* const getFileList = (dirName) => {
  let files = [];
  const items = fs.readdirSync(dirName, { withFileTypes: true });
  items.map((item) => {
    const pathW = path.join(dirName, item.name);
    return item.isDirectory() ? files = [...files, ...getFileList(pathW)] : files.push(pathW);
  });
  return files;
};

// go through the dir and gives you the .md file
const fileArray = getFileList(folder).filter(file => {
  if (path.extname(file) == ".md") {
    return file;
  }
})

console.log(fileArray);

const fileToWork = fileArray.toString();

fs.readFile(fileToWork, 'utf8', (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data);
}); */

console.log(mdLinks(folder));