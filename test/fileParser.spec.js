var expect = require("chai").expect;
const { parseProductsFile } = require("../src/fileParser");

describe("Parse file", function() {
  it("given the file contents should return correct array of products", function() {
    let contents = "Candy Bar, 500\nPaperback Book, 700\nDetergent, 1000";
    let expectedResult = [
      {
        product: "Candy Bar",
        price: 500
      },
      {
        product: "Paperback Book",
        price: 700
      },
      {
        product: "Detergent",
        price: 1000
      }
    ];

    var actualResult = parseProductsFile(null, contents);

    expect(actualResult).to.eql(expectedResult);
  });
});
