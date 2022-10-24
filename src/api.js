const fct = require('./fct.js');
const axios = require('axios');

const mdLinks = (filePath, opt) => new Promise((resolve) => {
  //check if filePath is absolute or relative
  const absolutePath = fct.isAbsolutePath(filePath) ? filePath : fct.resolvePath(filePath);
  // if the path given is a directory, get the directory content, if the path given is a file, does not enter the recursive function
  let dirFiles = [];
  fct.isAFolder(absolutePath) ? dirFiles = [...dirFiles, ...fct.folderContent(absolutePath)] : dirFiles.push(absolutePath);
  // get the .md file
  const fileArray = fct.filteredArray(dirFiles);
  // array of links
  const allLinks = fct.getLinks(fileArray);

  if (opt.validate === true) {
    // get an array of only links URL
    const newArray = fct.arrayOfLinks(allLinks);
    // axios.get for every link
    let arrayOfPromises = [];
    newArray.forEach((link) => {
      let promiseLink = axios.get(link)
        .then((result) => {
          return {
            href: link,
            text: allLinks.text,
            file: allLinks.file,
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
    return Promise.all(arrayOfPromises)
     .then((result) => resolve(result));

  } else {
    resolve(allLinks);
  }
});

module.exports = {
  mdLinks
}