const fs = require('fs');
const path = require('path');

// Recursive function to get the content of a directory
const folderContent = (dirName) => {
    let files = [];
    const items = fs.readdirSync(dirName, { withFileTypes: true });
    items.forEach((item) => {
      const pathW = path.join(dirName, item.name);
      item.isDirectory() ? files = [...files, ...folderContent(pathW)] : files.push(pathW);
    });
    return files;
  }

/* module.exports = {
    folderContent,

} */