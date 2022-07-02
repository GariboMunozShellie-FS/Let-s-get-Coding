const {uppercase, lowercase} = require("./string")
const {add, subtract, multiply ,divide, sqrt} = require("./math")

describe("Testing the string Module", () => {

    test("Should uppercase a string input",() => {
        expect(uppercase("Bob")).toBe("BOB");
    })

    test("Should lowercase a string input",() => {
        expect(lowercase("FULL SAIL")).toBe("full sail");
    })
})

describe("Testing the math Module", () => {

    test("Should add number togeter",() => {
        expect(add(2,2)).toEqual(4);
    })

    test("Should subtract right number from left",() => {
        expect(subtract(2,1)).toEqual(1);
    })

    test("Should multiply number togeter",() => {
        expect(multiply(3,3)).toEqual(9);
    })

    test("Should divide right number from left",() => {
        expect(divide(6,2)).toEqual(3);
    })

    test("Should find the square root of the number",() => {
        expect(sqrt(9)).toEqual(3);
    })

    test("Should divide right number from left",() => {
        expect(Math.max(1,3,5)).toEqual(5);
    })
})