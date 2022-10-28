const { isAFolder } = require('../lib/fromFs.js');
const { isAbsolutePath, resolvePath } = require('../lib/fromPath.js');
const { folderContent } = require('./folderContent.js');
const { filteredArray } = require('./filterArray.js');
const { getLinks } = require('./getLinks.js');

// Get links basic
const linksBasic = (route) => {
    //check if filePath is absolute or relative
    const absolutePath = isAbsolutePath(route) ? route : resolvePath(route);
    // if the path given is a directory, get the directory content, if the path given is a file, does not enter the recursive function
    let dirFiles = [];
    isAFolder(absolutePath) ? dirFiles = [...dirFiles, ...folderContent(absolutePath)] : dirFiles.push(absolutePath);
    // get the .md file
    const fileArray = filteredArray(dirFiles);
    // array of links
    const allLinks = getLinks(fileArray);
    return allLinks;
  }

  module.exports = {
    linksBasic
  }