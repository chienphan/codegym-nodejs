const prefixArray = ['29', '30', '31', '32', '33', '40']
const licensePlateArray = ['29A89543', '33A97086', '43A89765', '50A87654', '30A67898']
const checkLicensePlate = (licensePlate) => {
    let check = false
     prefixArray.forEach(prefix => {
        if (licensePlate.startsWith(prefix)) {
            check = true
        }
    })

    return check
}
const result = []
licensePlateArray.forEach(licensePlate => {
    if (checkLicensePlate(licensePlate) === true) {
        result.push(licensePlate)
    }
})

console.log(`Các biển số xe Hà Nội là ${result.join(', ')}`);