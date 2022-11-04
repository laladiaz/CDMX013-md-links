const { folderContent } = require("../component/folderContent.js")

describe("test folderContent that only accepts directories as arg", () => {
    test("folderContent accepts a directory and returns an array of files", () => {
        const arrayOfFiles = [
            '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/Background Foto linked in Lala-4.png',
            '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/level2/level2.md',
            '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/level2/level3/level3.md',
            '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/otherExt.text',
            '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile.md',
            '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/testFile2.md'
        ];
        const absolutePath = '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest';
        expect(folderContent(absolutePath)).toStrictEqual(arrayOfFiles);
    })
    test("folderContent should return an empty array if directory is empty", () => {
        const arrayOfFiles = [];
        const absolutePath = '/Users/lala/Documents/Laboratoria/Proyecto4 - MDLinks/CDMX013-md-links/test/folderTest/level2-empty'
        expect(folderContent(absolutePath)).toEqual(arrayOfFiles);
    })
})
