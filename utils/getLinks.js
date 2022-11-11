const { readFile } = require('../lib/fromFs.js');


// get the links in .md
const getLinks = (arrLinks) => {
    let links = [];
    arrLinks.forEach((file) => {
      // read the files
      const content = readFile(file);
      // obtain the urls
      const regExp = /\[(.+)\]\((https?:\/\/.+)\)/gi;
      const linksFound = [...content.matchAll(regExp)];
      if (linksFound !== null || linksFound.length !== 0) {
        // ensambles the array of objects
        linksFound.forEach(link => {
          links.push({
            file: file,
            href: link[2],
            text: link[1].slice(0, 50)
          })
        })
      }
    })
    return links
  }

  module.exports ={
    getLinks
  }