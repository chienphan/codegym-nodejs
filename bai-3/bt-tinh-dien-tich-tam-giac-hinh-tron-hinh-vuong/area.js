const getTriangleArea = (a,b,c) => {
    const p = (a + b + c) / 2
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c))
    return area
}

const getCircleArea = (r) => {
    const area = Math.PI * r * r
    return area
}

const getSquareArea = a => {
    this.b = 10
    console.log(this);
    setTimeout(()=>{
        console.log(this);
    }, 1000)
    const area = a * a
    return area
}

module.exports = {getTriangleArea, getCircleArea, getSquareArea}