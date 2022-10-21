const fct = require('./fct.js');
const axios = require('axios');

const mdLinks = (filePath, opt) => new Promise((resolve, reject) => {
  //check if filePath is absolute or relative
  const absolutePath = fct.isAbsolutePath(filePath) ? filePath : fct.resolvePath(filePath);
  // if the path given is a directory, get the directory content, if the path given is a file, does not enter the recursive function
  let dirFiles = [];
  fct.isAFolder(absolutePath) ? dirFiles = [...dirFiles, ...fct.folderContent(absolutePath)] : dirFiles.push(absolutePath);
  // get the .md file
  const fileArray = fct.filteredArray(dirFiles);
  // array of links
  const allLinks = fct.getLinks(fileArray);

  // resolve(allLinks);
  if (opt.validate === true) {
    const newArray = fct.arrayOfLinks(allLinks);

    let arrayOfPromises = [];
    newArray.forEach((link) => {
      let promiseLink = axios.get(link)
        .then((result) => {
          return {
            status: result.status,
            message: result.statusText
          }
        })
        .catch((error) => {
        if (error.response) {
          return {
            href: link,
            status: error.response.status,
            message: error.response.statusText
          };
        } else{
          return {
            status: error.message,
            message: 'fail'
          }
        }
      });
      arrayOfPromises.push(promiseLink);
    })
    Promise.all(arrayOfPromises)
      .then((response) => resolve(response))
    // resolve(granPromise);

  } else {
    resolve(allLinks);
  }
});

module.exports = {
  mdLinks
}