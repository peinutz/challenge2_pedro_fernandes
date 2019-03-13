const { loadProductsFile, parseProductsFile } = require("./fileParser");
const {findClosestPair} = require("./findClosestPair");

var args = process.argv.slice(2);

if(args.length != 2) {
    console.log("Incorrect number of arguments.");
}
else {
    const filepath = args[0];
    const budget = args[1];
    loadProductsFile(filepath, parseProductsFile).then(res => console.log(findClosestPair(res, parseInt(budget))));
    //loadProductsFile("C:\\Users\\Pedro\\Desktop\\repos\\test\\file.txt", parseProductsFile).then(res => console.log(findClosestPair(res, 10000)));
}


