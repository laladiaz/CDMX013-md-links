const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Checks if the path is absolute
const isAbsolutePath = (dirName) => path.isAbsolute(dirName);
// Resolve the path to make it absolute
const resolvePath = (dirName) => path.resolve(dirName);
// Checks if the path given is directory
const isAFolder = (dirName) => fs.lstatSync(dirName).isDirectory();
//Read a dir synchronously
const readDir = (dirName) => fs.readdirSync(dirName, { withFileTypes: true });
//Join path
const pathJoin = (dirName, param2) => path.join(dirName, param2);
// obtains extension name
const extensionName = (file) => path.extname(file);
// Reads a file synchronously
const readFile = (file) => fs.readFileSync(file, 'utf-8');
// get a HTTP response
const getHttpResponse = (link) => axios.get(link);

// Get links basic
const linksBasic = (route) => {
  //check if filePath is absolute or relative
  const absolutePath = isAbsolutePath(route) ? route : resolvePath(route);
  // if the path given is a directory, get the directory content, if the path given is a file, does not enter the recursive function
  let dirFiles = [];
  isAFolder(absolutePath) ? dirFiles = [...dirFiles, ...folderContent(absolutePath)] : dirFiles.push(absolutePath);
  // get the .md file
  const fileArray = filteredArray(dirFiles);
  // array of links
  const allLinks = getLinks(fileArray);
  return allLinks;
}
// Recursive function to get the content of a directory
const folderContent = (dirName) => {
  let files = [];
  const items = readDir(dirName);
  items.forEach((item) => {
    const pathW = pathJoin(dirName, item.name);
    item.isDirectory() ? files = [...files, ...folderContent(pathW)] : files.push(pathW);
  });
  return files;
}
// get the .md file
const filteredArray = (dirPath) => dirPath.filter(file => (extensionName(file) == ".md"));
// get the links in .md
const getLinks = (arrLinks) => {
  let links = [];
  arrLinks.forEach((file) => {
    // read the files
    const content = readFile(file);
    // obtain the urls
    const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
    const linksFound = [...content.matchAll(regExp)];
    if (linksFound !== null || linksFound.length !== 0) {
      // ensambles the array of objects
      linksFound.forEach(link => {
        links.push({
          file: file,
          href: link[2],
          text: link[1].slice(0, 50)
        })
      })
    }
  })
  return links
}
// make HTTP request with axios.get
const promises = (arr) => {
  let arrayOfPromises = [];
  arr.forEach((link) => {
    let promiseLink = getHttpResponse(link.href)
      .then((result) => {
        return {
          href: link.href,
          text: link.text,
          file: link.file,
          status: result.status,
          message: result.statusText
        }
      })
      .catch((error) => {
        if (error.response) {
          return {
            href: link.href,
            text: link.text,
            file: link.file,
            status: error.response.status,
            message: error.response.statusText
          };
        } else {
          return {
            href: link.href,
            text: link.text,
            file: link.file,
            status: error.message,
            message: 'fail'
          }
        }
      });
    arrayOfPromises.push(promiseLink);
  })
  return arrayOfPromises;
}
const statsWithoutVal = (arr) =>{
  const arrLinksHref = arr.map(link => link.href);
    let arrOfStats =[];
      arrOfStats.push ({
        Total: arrLinksHref.length,
        Unique: new Set(arrLinksHref).size
      })
      return arrOfStats;
}

module.exports = {
  isAbsolutePath,
  resolvePath,
  isAFolder,
  readDir,
  pathJoin,
  extensionName,
  readFile,
  getHttpResponse,
  linksBasic,
  folderContent,
  filteredArray,
  getLinks,
  promises,
  statsWithoutVal
}