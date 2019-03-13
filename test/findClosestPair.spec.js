// eslint-disable-next-line no-unused-vars
var assert = require("chai").assert;
const { findClosestPair } = require("../src/findClosestPair"); 

describe("findClosestPair", function() {
  it("given a list of products ordered by price and a budget should return a pair whose sum is minimally under or equal to the budget.", function() {

    let productsList = [ { product: 'Candy Bar', price: 500 },
    { product: 'Paperback Book', price: 700 },
    { product: 'Detergent', price: 1000 },
    { product: 'Headphones', price: 1400 },
    { product: 'Earmuffs', price: 2000 },
    { product: 'Bluetooth Stereo', price: 6000 } ];

    let budget = 10000;

    let expectedResult = { 
      Product1: { product: 'Earmuffs', price: 2000 },
      Product2: { product: 'Bluetooth Stereo', price: 6000 } 
    };

    let actualResult = findClosestPair(productsList, budget);

    assert.deepEqual(expectedResult, actualResult);
  });

  it("given a list of products ordered by price and a budget lower than any pair of products on the list should return the correct message", function() {

    let productsList = [ { product: 'Candy Bar', price: 500 },
    { product: 'Paperback Book', price: 700 },
    { product: 'Detergent', price: 1000 },
    { product: 'Headphones', price: 1400 },
    { product: 'Earmuffs', price: 2000 },
    { product: 'Bluetooth Stereo', price: 6000 } ];

    let budget = 10;

    let expectedResult = "Not Possible."

    let actualResult = findClosestPair(productsList, budget);

    assert.deepEqual(expectedResult, actualResult);
  });

  it("given an empty list should return the correct message", function() {

    let productsList = [ ];

    let budget = 10;

    let expectedResult = "Not Possible."

    let actualResult = findClosestPair(productsList, budget);

    assert.deepEqual(expectedResult, actualResult);
  });
});
