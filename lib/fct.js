const fs = require('fs');
const path = require('path');
const axios = require('axios');

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
 // read the files
 const readFile = (route) => fs.readFileSync(route, 'utf-8');

//regex to get links http and https
const regexGetLinks = (param) =>{
  const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
  const linksFound = [...param.matchAll(regExp)];
  return linksFound
}
// make HTTP request with axios.get
const promises = (arr) => {
  let arrayOfPromises = [];
  arr.forEach((link) => {
    let promiseLink = axios.get(link.href)
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
// For the CLI:

const getHttpResponse = (param) => axios.get(param);

module.exports = {
  folderContent,
  isAbsolutePath,
  resolvePath,
  isAFolder,
  filteredArray,
  readFile,
  regexGetLinks,
  promises,
  getHttpResponse
}