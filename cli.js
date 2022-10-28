#!/usr/bin/env node
const fct = require('./lib/fct.js');

const [, , filePath] = process.argv;
const validateOpt = process.argv.includes('--validate');
const statsOpt = process.argv.includes('--stats');


const mdLinks = (filePath, opt) => new Promise((resolve) => {
  // basic array of Links
  const allLinks = fct.linksBasic(filePath);
  const promisesArrayToResolve = fct.promises(allLinks);
  const arrOfStats = fct.statsWithoutVal(allLinks);
  if (opt.validate === true && opt.stats === false) {
    //show the validated links
    const validate = Promise.all(promisesArrayToResolve)
      .then((result) => (result))
      validate.then((result) =>{
        result.forEach((item) =>{
          console.log (`
file: ${item.file} | href: ${item.href} | text: ${item.text}  | status: ${item.status} | message: ${item.message}`);
        })
      })
  } else if (opt.validate === false && opt.stats === true) {
    //show only stats
    const stats = (`
Total: ${arrOfStats.Total}
Unique: ${arrOfStats.Unique}
    `)
    resolve(stats);
  } else if (opt.validate === true && opt.stats === true) {
    // show stats with broken links
    const arrOfBroken = Promise.all(promisesArrayToResolve)
      .then((result) => {
        const howManyBroken = result.filter((item) => (item.message === 'fail' || item.message === 'Not Found')).length
        return (`
Total: ${arrOfStats.Total}
Unique: ${arrOfStats.Unique}
Broken: ${howManyBroken}
        `)
      });
    resolve(arrOfBroken)
  } else {
    allLinks.forEach((item) =>{
      console.log (`
file: ${item.file} | href: ${item.href} | text: ${item.text}`);
    })
  }
})

mdLinks(filePath, { validate: validateOpt, stats: statsOpt }).then((result) => {
  console.log(result);
});