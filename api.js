const { linksBasic } = require('./component/links.js');
const { promises } = require('./component/promises.js');


const mdLinks = (filePath, opt) => new Promise((resolve) => {
  const allLinks = linksBasic(filePath);

  if (opt.validate === true) {
       // axios.get for every link
   const promisesArrayToResolve = promises(allLinks);
    return Promise.all(promisesArrayToResolve)
      .then((result) => resolve(result));

  } else {
    return resolve(allLinks);
  }
});

module.exports = {
  mdLinks
}
