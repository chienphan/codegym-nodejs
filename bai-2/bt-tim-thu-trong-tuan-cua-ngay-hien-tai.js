const dayNameArray = ['chủ nhật', 'thứ hai', 'thứ ba', 'thứ tư', 'thứ năm', 'thứ sáu', 'thứ bảy']

const currentDate = new Date();
const currentDayIndex = currentDate.getDay();
console.log(`Hôm nay là ${dayNameArray[currentDayIndex]}`);