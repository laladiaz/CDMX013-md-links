const { getHttpResponse } = require('../lib/fromAxios.js');

// make HTTP request with axios.get
const promises = (arr) => {
    let arrayOfPromises = [];
    arr.forEach((link) => {
      let promiseLink = getHttpResponse(link.href)
        .then((result) => {
          return {
            href: link.href,
            text: link.text,
            file: link.file,
            status: result.status,
            message: result.statusText
          }
        })
        .catch((error) => {
          if (error.response) {
            return {
              href: link.href,
              text: link.text,
              file: link.file,
              status: error.response.status,
              message: error.response.statusText
            };
          } else {
            return {
              href: link.href,
              text: link.text,
              file: link.file,
              status: error.message,
              message: 'FAIL'
            }
          }
        });
      arrayOfPromises.push(promiseLink);
    })
    return arrayOfPromises;
  }

  module.exports = {
    promises
  }