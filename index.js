const api = require('./src/api.js')
const fct = require('./src/fct.js');
const isMdRelative = 'README.md';
const isMd = '/Users/lala/Documents/Laboratoria/Proyecto1-cipher/CDMX013-cipher/README.md'
const folder = '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links';
const folderRelative = './test';
const URL = 'https://axios-http.com/docs/notes';


// console.log(api.mdLinks(folderRelative));
fct.testGET(URL)
.then(response => console.log(response))