const { isReal } = require('./lib/fromFs.js');
const { linksBasic } = require('./utils/links.js');
const { promises } = require('./utils/promises.js');


const mdLinks = (filePath, opt = {validate: false}) => new Promise((resolve, reject) => {
  if(isReal(filePath)) {
  const allLinks = linksBasic(filePath);

  if (opt.validate === true) {
       // axios.get for every link
   const promisesArrayToResolve = promises(allLinks);
    return Promise.all(promisesArrayToResolve)
      .then((result) => resolve(result));

  } else {
    return resolve(allLinks);
  }
} else {
  reject(new Error("This path doesn't exist"));
}
});

module.exports = {
  mdLinks
}
