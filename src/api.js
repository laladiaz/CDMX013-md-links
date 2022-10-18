const fct = require('./fct.js');

const mdLinks = (filePath) => {
  // create the return promise function
  //check if filePath is absolute or relative
  const absolutePath = fct.isAbsolutePath(filePath) ? filePath : fct.resolvePath(filePath);
  // if the path given is a directory, get the directory content, if the path given is a file, does not enter the recursive function
  let dirFiles = [];
  fct.isAFolder(absolutePath) ? dirFiles = [...dirFiles, ...fct.folderContent(absolutePath)] : dirFiles.push(absolutePath);
  // get the .md file
  const fileArray = dirFiles.filter(file => (fct.mdExtName(file) == ".md"));

  let links = [];
  fileArray.forEach((file) => {
    // read the files
    const content = fct.readMdFile(file);
    // obtain the urls
    const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
    const linksFound = [...content.matchAll(regExp)];
    if (linksFound !== null || linksFound.length !== 0) {
      // ensambles the array of objects
      linksFound.forEach(link => {
        links.push({
          file: file,
          href: link[2],
          text: link[1]
        })
      })
    }
  })
  return links;
};

module.exports = {
  mdLinks
}