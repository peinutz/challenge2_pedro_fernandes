"use strict";

const findClosestPair = (productsArray, giftCardBudget) => {

  if(productsArray.length < 2) return "Not found.";
  let l_product, r_product;

  let leftIndex = 0;
  let rightIndex = productsArray.length - 1;
  let diff = Number.MAX_VALUE;

  while (rightIndex > leftIndex) {
    let l_price = productsArray[leftIndex].price;
    let r_price = productsArray[rightIndex].price;

    if (Math.abs(l_price + r_price - giftCardBudget) < diff) {
      l_product = leftIndex;
      r_product = rightIndex;
      diff = Math.abs(l_price + r_price - giftCardBudget);
    }

    if(l_price + r_price === giftCardBudget) 
      break;

    if (l_price + r_price > giftCardBudget) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
  
  if(productsArray[l_product].price + productsArray[r_product].price  <= giftCardBudget) {
    return   {
      "Product1" : productsArray[l_product],
      "Product2" : productsArray[r_product]
    }
  } else {
    return "Not Found";
  }
};

module.exports = {
  findClosestPair
}
