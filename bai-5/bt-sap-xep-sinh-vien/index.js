const fastcsv = require('fast-csv');
const fs = require('fs');

const rawData = fs.readFileSync('students.json');
const students = JSON.parse(rawData)
const sortedStudents = students.sort((a, b) => {
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    return 0;
  })
const ws = fs.createWriteStream("students.csv");
fastcsv.write(sortedStudents, { headers: true }).pipe(ws);
