#!/usr/bin/env node
// const fct = require('./lib/fct.js');
const api = require('./api.js');
const mdLinks = api.mdLinks;

const [,, filePath, ...opt] = process.argv;
const validateOpt = process.argv.includes('--validate');
// const statsOpt = process.argv.includes('--stats');

/* const mdLinks = (filePath, opt) => new Promise((resolve) => {
  // if the path given is a directory, get the directory content, if the path given is a file, does not enter the recursive function
  let dirFiles = [];
  fct.isAFolder(filePath) ? dirFiles = [...dirFiles, ...fct.folderContent(filePath)] : dirFiles.push(filePath);
  // get the .md file
  const fileArray = fct.filteredArray(dirFiles);
  // array of links

  let links = '';
  // console.log('este es un ', links);
  fileArray.forEach((file) => {
    // read the files
    const content = fct.readFile(file);
    // obtain the urls
    const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
    const linksFound = [...content.matchAll(regExp)];
    if (linksFound !== null || linksFound.length !== 0) {
      // ensambles the array of objects
      linksFound.forEach((link) => {
      links += file + " | " + link[2] + " | " + link[1].slice(0, 50);
      })
    }
  })
  if(validateOpt === true){
    let arrayOfPromises = [];
    links.forEach((link) => {
    let promiseLink = fct.getHttpResponse(link.href)
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
  return Promise.all(arrayOfPromises)
      .then((result) => resolve(result));
  } else {
    resolve(links);
  }

}) */

mdLinks(filePath, {validate: validateOpt}).then(console.log);