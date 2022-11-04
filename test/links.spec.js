const { linksBasic } = require("../component/links");

describe("test links and its linksBasic function", () => {
    test("linksBasic accept a absolute route of a folder with md files and returns an array of links", () => {
        const resultArray = [
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile.md',
              href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
              text: 'md-links'
            },
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile2.md',
              href: 'https://es.wikipedia.org/wiki/Markdown',
              text: 'Markdown'
            },
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile2.md',
              href: 'https://es.wikipedia.org/wiki/Markdown',
              text: 'Markdown'
            },
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile2.md',
              href: 'https://nodejs.org/',
              text: 'Node.js'
            },
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile2.md',
              href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
              text: 'md-links'
            },
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile2.md',
              href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
              text: 'Módulos, librerías, paquetes, frameworks... ¿cuál '
            },
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile2.md',
              href: 'https://developer.mozilla.org/e/docs/Web/JavaScript/Reference/Global_Objects/Set',
              text: 'Este es un link que no se encuentra'
            }
          ]
        const absolutePathOfDir = '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest';
        expect(linksBasic(absolutePathOfDir)).toStrictEqual(resultArray);
    })
    test("linksBasic accept a absolute route of a file and returns an array of links", () => {
        const resultArray = [
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile.md',
              href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
              text: 'md-links'
            }
        ]
          const absolutePathOfFile = '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile.md';
        expect(linksBasic(absolutePathOfFile)).toEqual(resultArray);
    })
    test("if the route for dir is empty, should return and empty array", () => {
        const absolutePathOfDir = '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/level2-empty'
        const resultArray = [];
        expect(linksBasic(absolutePathOfDir)).toEqual(resultArray);
    })
    test( "if file is other than md, it should return an empty array", () => {
        const absolutePathOfFile = '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/otherExt.text';
        const resultArray = [];
        expect(linksBasic(absolutePathOfFile)).toEqual(resultArray);
    })
    test("linksBasic accept a relative route of a folder with md files and returns an array of links", () => {
        const resultArray = [
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile.md',
              href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
              text: 'md-links'
            },
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile2.md',
              href: 'https://es.wikipedia.org/wiki/Markdown',
              text: 'Markdown'
            },
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile2.md',
              href: 'https://es.wikipedia.org/wiki/Markdown',
              text: 'Markdown'
            },
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile2.md',
              href: 'https://nodejs.org/',
              text: 'Node.js'
            },
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile2.md',
              href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
              text: 'md-links'
            },
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile2.md',
              href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
              text: 'Módulos, librerías, paquetes, frameworks... ¿cuál '
            },
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile2.md',
              href: 'https://developer.mozilla.org/e/docs/Web/JavaScript/Reference/Global_Objects/Set',
              text: 'Este es un link que no se encuentra'
            }
          ]
        const relativePathOfDir = './test/folderTest';
        expect(linksBasic(relativePathOfDir)).toStrictEqual(resultArray);
    })
})