const fct = require('./lib/fct.js');


const mdLinks = (filePath, opt) => new Promise((resolve) => {
  const allLinks = fct.linksBasic(filePath);

  if (opt.validate === true) {
       // axios.get for every link
   const promisesArrayToResolve = fct.promises(allLinks);
    return Promise.all(promisesArrayToResolve)
      .then((result) => resolve(result));

  } else {
    return resolve(allLinks);
  }
});

module.exports = {
  mdLinks
}
