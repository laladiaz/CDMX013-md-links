const { statsWithoutVal } = require("../component/stast")

describe("stats tests", () => {
    test("statsWithoutVal function and shoul return the stats of an array of links", () => {
        const links = [
            {
                href: 'https://iamgood.com',
                text: 'i am good',
                file: 'prueba2.md'
            },
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
            const linksStats = {
                Total: 4,
                Unique: 3
            }
        expect(statsWithoutVal(links)).toStrictEqual(linksStats);
    })
    test("if argument is an empty array, should be 0", () => {
        const links =[]
        const linksStats = {
            Total: 0,
            Unique: 0
        }
        expect(statsWithoutVal(links)).toStrictEqual(linksStats);
    })
})