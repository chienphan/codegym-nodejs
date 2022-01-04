const { getCircleArea, getTriangleArea, getSquareArea } = require('./area.js')

// triangle
const triangleArea = getTriangleArea(3, 4, 5)
console.log(`Dien tich tam giac 3 canh dai lan luot 3, 4, 5 la: ${triangleArea}`);

// Circle
const circleArea = getCircleArea(5)
console.log(`Dien tich hinh tron co ban kinh 5 la: ${circleArea}`);

// Square
const squareArea = getSquareArea(5)
console.log(`Dien tich hinh vuong co canh 5 la: ${squareArea}`);