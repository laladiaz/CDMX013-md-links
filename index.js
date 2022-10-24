const api = require('./src/api.js');

const folderRelative = './test';
const URL = 'https://axios-http.com/docs/notes';
const URLFail = 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175';
const URLFail2 = 'https://developer.mozilla.org/e/docs/Web/JavaScript/Reference/Global_Objects/Set';


api.mdLinks(folderRelative, {validate: false}).then(console.log);
// api.mdLinks(folderRelative, {validate: true}).then(console.log);