const { getLinks } = require("../component/getLinks")

describe("test getLinks", () => {
    test("given an array with md files, shoud return an array of links", () => {
        const mdArray = [
            '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile.md'
        ]
        const arrayOfLinks = [
            {
              file: '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile.md',
              href: 'https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg',
              text: 'md-links'
            }
          ]
        expect(getLinks(mdArray)).toEqual(arrayOfLinks);
    });
    test("if md file is empty, should return an empty array", () => {
        const mdArray = [
            '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/level2/level3/level3.md'
        ]
        const arrayOfLinks = [];
        expect(getLinks(mdArray)).toEqual(arrayOfLinks);
    })
})