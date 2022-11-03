const getHttpResponse = jest.fn((link) => {
    return new Promise((resolve, reject) => {
        let obj = {}
    if (link === 'https://somethingicantfound.com') {
       obj = {response: {status: 404, statusText: 'Not Found'}}
       reject(obj);
    } else if (link === 'https://abrokenlink.com') {
        obj = {message: 'getaddrinfo ENOTFOUND', statusText: 'FAIL'}
        reject(obj);
    } else {
       obj = { status: 200, statusText:'OK'}
       resolve(obj);
    }
    //return Promise.resolve(obj)
})
});

module.exports = {
    getHttpResponse
}