const getHttpResponse = jest.fn((link) => {
    let obj = {}
    if (link === 'https://somethingicantfound.com') {
        obj = {status: 404, statusText: 'Not Found'}
    } else if (link === 'https://abrokenlink.com') {
        obj = {status: 'getaddrinfo ENOTFOUND', statusText: 'FAIL'}
    } else {
        obj = { status: 200, statusText:'OK'}
    }
    return Promise.resolve(obj)
});

module.exports = {
    getHttpResponse
}