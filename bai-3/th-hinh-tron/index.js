const { getArea, getPerimeter }  = require("./calculator.module.js");

const r = 100;

const areaResult = getArea(r);
const perimeterResult = getPerimeter(r);

console.log(`R = ${r}`);
console.log(`Area = ${areaResult}`);
console.log(`Perimeter = ${perimeterResult}`);
