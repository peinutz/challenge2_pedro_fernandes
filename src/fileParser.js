"use strict";
var fs = require("fs");

const loadProductsFile = (filepath, callback) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, "utf8", (err, data) => {
      if (err) reject(err);

      if(data.length <= 0) reject("Empty file");

      resolve(callback(null, data));
    });
  });
};

const parseProductsFile = (err, content) =>
  content.length > 0 && content.split(/\r?\n/).map(productLineToObject);

const productLineToObject = line => {
  let [product, price] = line.split(",");
  return {
    product: product.trim(),
    price: parseInt(price.trim())
  };
};

module.exports = {
  loadProductsFile,
  parseProductsFile
};
