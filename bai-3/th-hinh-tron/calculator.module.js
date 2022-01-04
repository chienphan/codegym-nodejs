const PI = Math.PI;
   
getArea = (r) => {
  return PI * r * r;
};
   
getPerimeter = (r) => {
  return 2 * PI * r;
};

module.exports = { getArea, getPerimeter };
