const myClass = [
    {
        name: 'An Nguyễn',
        sex: 'male',
        score: 9
    },
    {
        name: 'Lê Phan',
        sex: 'female',
        score: 8
    },
    {
        name: "Bình Đỗ",
        sex: 'male',
        score: 10
    },
    {
        name: "Anh Phạm",
        sex: 'female',
        score: 9
    },
    {
        name: "Minh Đỗ",
        sex: 'female',
        score: 10
    },
    {
        name: "Huy Phạm",
        sex: 'male',
        score: 2
    }
]

const getTotalScoreBySex = (studentOfClass, sex) => {
    return studentOfClass.reduce((prevScore, currStudent) => {
        if (currStudent.sex === sex) {
            return prevScore + currStudent.score
        }
        else {
            return prevScore + 0
        }
    }, 0)
}

const numberOfFemaleStudent = myClass.filter(student => student.sex === 'female').length
const averageOfFemale = getTotalScoreBySex(myClass, 'female') / numberOfFemaleStudent

const numberOfMaleStudent = myClass.filter(student => student.sex === 'male').length
const averageOfMale = getTotalScoreBySex(myClass, 'male') / numberOfMaleStudent

console.log(`Điểm trung bình của các bạn nữ là ${averageOfFemale} và các bạn nam là ${averageOfMale}`);