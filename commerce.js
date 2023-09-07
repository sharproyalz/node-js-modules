const fs = require("fs");
const path = require("path");
const utils = require("./utils.js");

const fileName = process.argv[2];
const discountPercent = process.argv[3];
const inputFilePath = path.join("input", fileName);
const outputFilePath = path.join("output", fileName);

console.log("Processing file:", inputFilePath);
if (fs.existsSync(inputFilePath)) {
    const data = fs.readFileSync(inputFilePath);
    const cart = JSON.parse(data);
    const result = utils.calculateTotalPrice(cart, discountPercent);

    fs.writeFileSync(outputFilePath, JSON.stringify(result));
    console.log("Writing result to:", outputFilePath);
} else {
    console.log("File not found:", inputFilePath);
}
