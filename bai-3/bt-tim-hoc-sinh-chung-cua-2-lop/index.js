const mathClass = [
    {
        name: "An Nguyen",
        sex: 'male'
    },
    {
        name: "Le Pham",
        sex: 'female'
    },
    {
        name: "Binh Le",
        sex: 'male'
    }
]

const itClass = [
    {
        name: "Binh Le",
        sex: 'male'
    },
    {
        name: "Loan Do",
        sex: 'female'
    },
    {
        name: "An Nguyen",
        sex: 'male'
    },
]

const _ = require('lodash')
const array = _.intersectionWith(mathClass, itClass, _.isEqual)
console.log(array);

