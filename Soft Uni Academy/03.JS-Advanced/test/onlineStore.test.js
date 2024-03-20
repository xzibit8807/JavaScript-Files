let { assert } = require("chai");
let {expect} = require("chai")

const {onlineStore} = require("./onlineStore");


describe('onlineStore', () => {
  describe('isProductAvailable', () => {
    it('should return a message indicating product availability', () => {
      const result = onlineStore.isProductAvailable('Product A', 10);
      expect(result).to.equal('Great! Product A is available for purchase.');
    });

    it('should handle out of stock products', () => {
      const result = onlineStore.isProductAvailable('Product B', 0);
      expect(result).to.equal('Sorry, Product B is currently out of stock.');
    });

    it('should throw an error for invalid input', () => {
      expect(() => onlineStore.isProductAvailable('Product C', 'invalid')).to.throw('Invalid input.');
    });
  });

  describe('canAffordProduct', () => {
    it('should return a message indicating successful purchase', () => {
      const result = onlineStore.canAffordProduct(50, 100);
      expect(result).to.equal('Product purchased. Your remaining balance is $50.');
    });

    it('should handle insufficient funds', () => {
      const result = onlineStore.canAffordProduct(150, 100);
      expect(result).to.equal("You don't have sufficient funds to buy this product.");
    });

    it('should throw an error for invalid input', () => {
      expect(() => onlineStore.canAffordProduct('invalid', 100)).to.throw('Invalid input.');
    });
  });

  describe('getRecommendedProducts', () => {
    const productList = [
      { name: 'Product A', category: 'Category1' },
      { name: 'Product B', category: 'Category2' },
      { name: 'Product C', category: 'Category1' }
    ];

    it('should return recommended products for a given category', () => {
      const result = onlineStore.getRecommendedProducts(productList, 'Category1');
      expect(result).to.equal('Recommended products in the Category1 category: Product A, Product C');
    });

    it('should handle no recommended products', () => {
      const result = onlineStore.getRecommendedProducts(productList, 'Category3');
      expect(result).to.equal('Sorry, we currently have no recommended products in the Category3 category.');
    });

    it('should throw an error for invalid input', () => {
      expect(() => onlineStore.getRecommendedProducts('invalid', 'Category1')).to.throw('Invalid input.');
    });
  });
});











/*







describe("test if the Product is available", () => {
    it("test for string", () => {
        assert.equal(typeof(product ));
        assert.equal(typeof(""));
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

*/