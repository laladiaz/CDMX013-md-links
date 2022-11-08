const { isReal } = require('./lib/fromFs.js');
const { linksBasic } = require('./component/links.js');
const { promises } = require('./component/promises.js');


const mdLinks = (filePath, opt) => new Promise((resolve, reject) => {
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
