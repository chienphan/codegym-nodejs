const array = [2, 5, 6, 456, 2, 76, 1000, 123, 888];
let max = array[0]

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (max < element) {
        max = element
    }
}

console.log(`Số lớn nhất trong mảng là ${max}`);