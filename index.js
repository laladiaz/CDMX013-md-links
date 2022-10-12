const fs = require('fs');
const path = require('path');
const isMd = 'README.md';
const folder = '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links'
// Read a file

/* fs.readFile(isMd, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});  */

// Obtain the file extension

// console.log(path.extname(isMd));

// Obtain the directory content

/* const traverseSync = dir => ({
  path: dir,
  children: fs.readdirSync(dir).map(file => {
    const pathW = path.join(dir, file);
    return fs.lstatSync(pathW).isDirectory()
      ? traverseSync(pathW)
      : { path };
  })
});

console.log(traverseSync(folder)) */

// read directory and tells the filenames
  // go through the dir and gives you the .md file

/* fs.readdir(folder, (err, files) => {
    if (err)
      console.log(err);
    else {
      console.log("Current directory filenames:");
      files.forEach(file => {
        console.log(file);
      })

      console.log("Filenames with the .md extension:");
      files.forEach(file => {
        if (path.extname(file) == ".md") {
            console.log(file);
        }      
      })
    }
  }) */


/* filenames = fs.readdirSync(folder);
  
console.log("\nCurrent directory filenames:");
filenames.forEach(file => {
  console.log(file);
});  */
