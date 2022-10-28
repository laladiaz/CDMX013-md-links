const axios = require('axios');

// get a HTTP response
const getHttpResponse = (link) => axios.get(link);

module.exports = {
    getHttpResponse
}