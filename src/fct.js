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
const filteredArray = (dirPath) => dirPath.filter(file => (path.extname(file) == ".md"));
//const mdExtName = (dirName) => path.extname(dirName);
// read file
// const readMdFile = (dirName) => fs.readFileSync(dirName, 'utf-8');
// get the links in .md
const getLinks = (arrLinks) => {
  let links = [];
  arrLinks.forEach((file) => {
    // read the files
    const content = fs.readFileSync(file, 'utf-8');
    // obtain the urls
    const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
    const linksFound = [...content.matchAll(regExp)];
    if (linksFound !== null || linksFound.length !== 0) {
      // ensambles the array of objects
      linksFound.forEach(link => {
        links.push({
          file: file,
          href: link[2],
          text: link[1]
        })
      })
    }
  })
  return links
}

module.exports = {
  folderContent,
  isAbsolutePath,
  resolvePath,
  isAFolder,
  filteredArray,
  getLinks
}