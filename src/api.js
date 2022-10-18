const fct = require('./fct.js');

const mdLinks = (filePath) => {
  // create the return promise function
  //check if filePath is absolute or relative
  const absolutePath = fct.isAbsolutePath(filePath) ? filePath : fct.resolvePath(filePath);
  // if the path given is a directory, get the directory content, if the path given is a file, does not enter the recursive function
  let dirFiles = [];
  fct.isAFolder(absolutePath) ? dirFiles = [...dirFiles, ...fct.folderContent(absolutePath)] : dirFiles.push(absolutePath);
  // get the .md file
  const fileArray = fct.filteredArray(dirFiles);
  // array of links
  const allLinks = fct.getLinks(fileArray);

  return allLinks;
};

module.exports = {
  mdLinks
}