const fct = require('./fct.js');

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