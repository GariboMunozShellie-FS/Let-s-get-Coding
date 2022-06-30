const {uppercase, lowercase} = require("./string")

describe("Testing the string Module", () => {

    test("Should uppercase a string input",() => {
        expect(uppercase("Bob")).toBe("BOB");
    })

    test("Should lowercase a string input",() => {
        expect(lowercase("FULL SAIL")).toBe("full sail");
    })
})