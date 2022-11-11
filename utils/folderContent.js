const { readDir } = require('../lib/fromFs.js');
const { pathJoin } = require('../lib/fromPath.js');

// Recursive function to get the content of a directory
const folderContent = (dirName) => {
    let files = [];
    const items = readDir(dirName);
    items.forEach((item) => {
      const pathW = pathJoin(dirName, item.name);
      item.isDirectory() ? files = [...files, ...folderContent(pathW)] : files.push(pathW);
    });
    return files;
  }

  module.exports = {
    folderContent
  }