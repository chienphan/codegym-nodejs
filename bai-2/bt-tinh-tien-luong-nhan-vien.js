const staff = {
    name: 'Bình Nguyễn',
    hourlyRate: 50000,
    timesheets: [
        {
            date: '1/12/2021',
            hours: 5
        },
        {
            date: '2/12/2021',
            hours: 8
        },
        {
            date: '3/12/2021',
            hours: 8
        },
        {
            date: '4/12/2021',
            hours: 5
        },
        {
            date: '6/12/2021',
            hours: 8
        },
        {
            date: '7/12/2021',
            hours: 4
        },
        {
            date: '8/12/2021',
            hours: 4
        }
    ]
}

const totalOfWorkingHour = staff.timesheets.reduce((preHour, currDate) => {
    return preHour + currDate.hours
}, 0)

const totalSalary = staff.hourlyRate * totalOfWorkingHour
console.log(`Lương của nhân viên ${staff.name} là: ${totalSalary}đ`);