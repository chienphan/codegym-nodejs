const { sum, subtract, multiplication, division }  = require("./calculator.module.js");

const x = 150;
const y = 100;

const sumResult = sum(100, 150);
const subtractResult = subtract(150, 100);
const multiplicationResult = multiplication(100, 150);
const divisionResult = division(150, 100);

console.log(`x = ${x} and y = ${y}`);
console.log(`sum = ${sumResult}`);
console.log(`subtract = ${subtractResult}`);
console.log(`multiplication = ${multiplicationResult}`);
console.log(`division = ${divisionResult}`);
