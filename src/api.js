const fct = require('./fct.js');

module.exports = mdLinks = (filePath) => {
  // create the return promise function
    //check if filePath is absolute or relative
    const absolutePath = fct.isAbsolutePath(filePath) ? filePath :fct.resolvePath(filePath);
    // if the path given is a directory, get the directory content, if the path given is a file, does not enter the recursive function
    let dirFiles = [];
    fct.isAFolder(absolutePath) ? dirFiles = [...dirFiles, ...fct.folderContent(absolutePath)] : dirFiles.push(absolutePath);
    // get the .md file
    const fileArray = dirFiles.filter(file => {
        if (fct.mdExtName(file) == ".md") {
          return file;
        }
      })
      let links =[];
    fileArray.forEach((file) => {
      // read the files
      const content = fct.readMdFile(file);
      // obtain the urls
      const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
      const linksFound = [...content.matchAll(regExp)];
      if (linksFound !== null || linksFound.length !== 0) {
     // ensambles the array of objects
        const arrayOfObject = [];
        for (let i=0; i<linksFound.length; i++) {
          arrayOfObject.push({
            file: file,
            href: linksFound[i][2],
            text: linksFound[i][1]
          })
        }
      links = [...links, ...arrayOfObject];
      }
    })
    return links;
  };
