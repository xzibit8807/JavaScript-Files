let { assert } = require("chai");
const { isOddOrEven } = require("./isOddOrEven");
//let {isOddOrEven} = require(`../test/isOddOrEven`)
describe("test with incorrect parameter", () => {
    it("test with object", () => {
        assert.equal(isOddOrEven({ prop: "Pesho" }, undefined, "returned value must be undefined "));
    })

    it("test with array", () => {
        assert.equal(isOddOrEven(["Pesho"], undefined, "returned value must be undefined "));
    })

    it("test with number", () => {
        assert.equal(isOddOrEven(10, undefined, "returned value must be undefined "));
    })

})

describe("test with correct data", () => {
    it("test with even word", () => {
        assert.equal(isOddOrEven("toto"), "even", "return value to equal 'even'");
        assert.equal(isOddOrEven("2222"), "even", "return value to equal 'even'");
        assert.equal(isOddOrEven("[]"), "even", "return value to equal 'even'");
    })
    it("test with odd word", () => {
        assert.equal(isOddOrEven("tot"), "odd", "return value to equal 'odd'");
        assert.equal(isOddOrEven("222"), "odd", "return value to equal 'odd'");
        assert.equal(isOddOrEven("[{]"), "odd", "return value to equal 'odd'");
    })

})