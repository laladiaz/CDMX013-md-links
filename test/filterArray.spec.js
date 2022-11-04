const { filteredArray } = require('../component/filterArray.js');

describe("tests filterArray", () => {
    test("if the arg is the folderTest, should return only the .md files", () => {
        const arrayOfFiles = [
            'testFile.md',
            'testFile2.md',
            'otherExt.text',
            'Background Foto linked in Lala-4.png'
        ];
        const mdFiles = [
            'testFile.md',
            'testFile2.md'
        ];
        expect(filteredArray(arrayOfFiles)).toStrictEqual(mdFiles);
    })
    test("mdFiles should not be empty", () => {
        const arrayOfFiles = [
            'testFile.md',
            'testFile2.md',
            'otherExt.text',
            'Background Foto linked in Lala-4.png'
        ];
        const mdFiles = [];
        expect(filteredArray(arrayOfFiles)).not.toEqual(mdFiles);
    })
    test("if arrayOfFiles doesn't have md files, it should return an empty array", () => {
        const arrayOfFiles = [
            'otherExt.text',
            'Background Foto linked in Lala-4.png'
        ];
        const mdFiles = [];
        expect(filteredArray(arrayOfFiles)).toEqual(mdFiles);
    })
})