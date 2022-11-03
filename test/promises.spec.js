const { promises } = require('../component/promises.js');

jest.mock('../lib/fromAxios.js')

describe("prueba axios en promises", () => {
    test("respuesta de HTTP", (done) => {
        const links = [
            {
                href: 'https://somethingicantfound.com',
                text: 'something i cant found',
                file: 'prueba2.md',
            },
            {
                href: 'https://abrokenlink.com',
                text: 'a broken link',
                file: 'prueba2.md',
            },
            {
                href: 'https://iamgood.com',
                text: 'i am good',
                file: 'prueba2.md'
            }];
            const validated = [
                {
                  href: 'https://somethingicantfound.com',
                  text: 'something i cant found',
                  file: 'prueba2.md',
                  status: 404,
                  message: 'Not Found'
                },
                {
                  href: 'https://abrokenlink.com',
                  text: 'a broken link',
                  file: 'prueba2.md',
                  status: 'getaddrinfo ENOTFOUND',
                  message: 'FAIL'
                },
                {
                  href: 'https://iamgood.com',
                  text: 'i am good',
                  file: 'prueba2.md',
                  status: 200,
                  message: 'OK'
                }
              ];
        Promise.all(promises(links)).then((result) => {
            expect(result).toEqual(validated)
            done();
        })
    })
})