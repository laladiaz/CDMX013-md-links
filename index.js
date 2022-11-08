const api = require('./api.js');

const folderRelative = './testa';


api.mdLinks(folderRelative, {validate: false}).then(console.log);
// api.mdLinks(folderRelative, {validate: true}).then(console.log);