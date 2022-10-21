const api = require('./src/api.js');
const fct = require('./src/fct.js');

const isMdRelative = 'README.md';
const isMd = '/Users/lala/Documents/Laboratoria/Proyecto1-cipher/CDMX013-cipher/README.md'
const folder = '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links';
const folderRelative = './test';
const URL = 'https://axios-http.com/docs/notes';
const URLFail = 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175';
const URLFail2 = 'https://developer.mozilla.org/e/docs/Web/JavaScript/Reference/Global_Objects/Set';

const arrLinks = [
    'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    'https://es.wikipedia.org/wiki/Markdown',
    'https://nodejs.org/',
    'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
    'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175'
  ];

// console.log(api.mdLinks(folderRelative, {validate: false}));
// console.log(api.mdLinks(folderRelative, {validate: true}));

/* const allPromises =[];
for(let i=0; i<arrLinks.length; i++){
const arrPromise = fct.testGET(arrLinks[i])
    .then(response => response.status)
    .catch((error) => error.respose ? error.response.status : error.response.url);
return allPromises.push(arrPromise);
}
Promise.all(allPromises)
    .then(result => result) */

fct.testGET(URLFail2)
    .then((result) => {
          console.log ({
            status: result.status,
            message: result.statusText
          })
        })
    .catch((error) => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log('dos', error.response.status);
            // console.log('tres', error.response.statusText);
            console.log({
                status: error.response.status,
                message: error.response.statusText
            })
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          // console.log(error.config);
    });