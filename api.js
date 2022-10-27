const fct = require('./lib/fct.js');


const mdLinks = (filePath, opt) => new Promise((resolve) => {
  //check if filePath is absolute or relative
  const absolutePath = fct.isAbsolutePath(filePath) ? filePath : fct.resolvePath(filePath);
  // if the path given is a directory, get the directory content, if the path given is a file, does not enter the recursive function
  let dirFiles = [];
  fct.isAFolder(absolutePath) ? dirFiles = [...dirFiles, ...fct.folderContent(absolutePath)] : dirFiles.push(absolutePath);
  // get the .md file
  const fileArray = fct.filteredArray(dirFiles);
  // array of links
  let links = [];
  fileArray.forEach((file) => {
   // read the files
    const content = fct.readFile(file);
    // obtain the urls
    const linksFound = fct.regexGetLinks(content);
    if (linksFound !== null || linksFound.length !== 0) {
      // ensambles the array of objects
      linksFound.forEach(link => {
        return links.push({
          file: file,
          href: link[2],
          text: link[1].slice(0, 50)
        })
      })
    }
  })
  if (opt.validate === true) {
       // axios.get for every link
   const promisesArrayToResolve = fct.promises(links);
    return Promise.all(promisesArrayToResolve)
      .then((result) => resolve(result));
  } else {
    return resolve(links);
  }
});

module.exports = {
  mdLinks
}