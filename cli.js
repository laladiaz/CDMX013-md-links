#!/usr/bin/env node
const fct = require('./lib/fct.js');
/* const api = require('./api.js');
const mdLinks = api.mdLinks; */

const [, , filePath] = process.argv;
const validateOpt = process.argv.includes('--validate');
const statsOpt = process.argv.includes('--stats');


const mdLinks = (filePath, opt) => new Promise((resolve) => {
// basic array of Links
const allLinks = fct.linksBasic(filePath);

  if (opt.validate === true) {
       // axios.get for every link
   const promisesArrayToResolve = fct.promises(allLinks);
    return Promise.all(promisesArrayToResolve)
      .then((result) => resolve(result));

  } else if (opt.stats ===true) {
    const arrOfStats = fct.statsWithoutVal(allLinks);
resolve (arrOfStats);
} else {
    return resolve(allLinks);
  }
 /*if (opt.validate === true && opt.stats === true) {
    let count = 0;
    links.forEach((link) =>{
      if(link.status)
    })
    const arrLinksHref = links.map(link => link.href);
   ({
        Total: arrLinksHref.length,
        Unique: new Set(arrLinksHref).size
      })
    )


  } else {
    return resolve(links);
  }

  let links = '';
  fileArray.forEach((file) => {
   // read the files
    const content = fct.readFile(file);
    // obtain the urls
    const linksFound = fct.regexGetLinks(content);
    if (linksFound !== null || linksFound.length !== 0) {
      // ensambles the array of objects
      linksFound.forEach((link) => {
      links += (file + " | " + link[2] + " | " + link[1].slice(0, 50) + "\n");
      return links;
      })
    }
  })
  if(validateOpt === true){
  let arrayOfPromises = [];
    fileArray.forEach((link) => {
    let promiseLink = fct.getHttpResponse(link.href)
      .then((result) => {
        arrayOfPromises += link[2] + " | " + link[1].slice(0, 50) + " | " + link.file + " | " + result.status + " | " + result.statusText + "\n";
        return arrayOfPromises;
        })
      .catch((error) => {
        if (error.response) {
          arrayOfPromises += link[2] + " | " + link[1].slice(0, 50) + " | " + link.file + " | " + error.response.status + " | " + error.response.statusText + "\n";
          return arrayOfPromises;
        } else {
           arrayOfPromises += link[2] + " | " + link[1].slice(0, 50) + " | " + link.file + " | " + error.message + " | " + "FAIL" + "\n";
           return arrayOfPromises;
      }
    });
    arrayOfPromises.push(promiseLink);
    return arrayOfPromises;
  })
  return Promise.all(arrayOfPromises)
      .then((result) => resolve(result));
  } else {
    return resolve(links);
  } */

})

mdLinks(filePath, { validate: validateOpt, stats: statsOpt }).then(console.log);