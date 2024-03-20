
function sum(a, b) {
    return a + b;
    }
    
    // Примерни тестове с mocha и chai
    var expect = require("chai").expect;
    const { describe, it } = require('mocha');
    
    describe("sum function", function () {

    it("should return the sum of two numbers", function () {
    expect(sum(2, 3)).to.equal(5);
    });
    
    it("should return NaN if any argument is not a number", function () {
        const first = "a";
        const second = 3;

        const result = sum(first, second);

        expect(result).to.be.NaN;
    }); //друг пример за писане на тестове
    
});