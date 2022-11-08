const api = require('./api.js');

const folderRelative = './test';


// api.mdLinks(folderRelative).then(console.log);
api.mdLinks(folderRelative, {validate: true}).then(console.log);