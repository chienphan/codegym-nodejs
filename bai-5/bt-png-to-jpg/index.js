const fs = require("fs");

const pngToJpeg = require('png-to-jpeg');
const imgStr = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAAyCAMAAABCiTbWAAAAn1BMVEUoJ4HX1uc1NIhQT5jJyd/xWiny8ff///+Tk8BdXKC8u9ehoMiurtDk5O+Ghbh4d7BCQZBraqiNQVW/TT/yZDb+9fL3oob5t6H71sn0g1796uT0eFD4rJRnN2WrhZr6wa7zbkP7y7z84NflVy7pZD3MUTnZzttBLXbaaE6fjK31jWuTR1jy1dDZVDROMXCzSkTrXTI1Knv2l3nQZ1W1cnnvjBYZAAADLElEQVRo3u2aaZujIAyAARW8qDrTTjv3zN73/f9/2z5uPQgJ2Kez091W8q1NiHmDBiQyNVthAT2gB/SAHtAD+umjx0U6Su7UxBoOM3WtlDHyLGNgUfi03NSgSBQHNhp604XtQuaYBqEXNQMyjJcLATUsMuEqhkSkEqAtbAOTXVsOMkOXwkhaEcAman8tuh/5QJD2vhvKq4UuMzu8Ho/XmG24WuuHEmGGi1wPobXu7bxidHAXQRvzl5Fg0eVCEDOJ0HF43QVlRLLlfnSTvWQedES+L7oGcdq5gE4AOhFeZ1vQaPUEOosGg8aHjlO+H3oOU4hy4UbHUxtJl8ZyxaYMMo9Oe5+l3dHtaoJy4UbfqitqIbDv38qaOOMOAxYpRI80tczk29GlYxXaEX0sVIXcVqYxF5VsdkCPlAsdVK1qCj2m0KWHbaGehF73E1zzIdF9ySkpJ8zt0K+J90L3saVPQ++lkfbjFXE1C/QCVZZKqjmg19wuqqJ0OTkt9Eba60nE1SzQC7RRqKQ6AXRz6dMUuojRtrT05e/A6JkhjaTQ738hi5TZYwWBLiTakVfqP0KnN7Ij+uYhOUf7YO7YKRbu6LZX08eDvvqRJACdOce206yn0NXRoK+XCY2OX+zgg3zs6F/eJYkDnTwtKNVxoZtlLtNGWN/Pkk5+mpVsfJ9uwMxnC62ODN21et1+7slvPPaxYxE8YvT3X3vwyys1K/T1tw58ee8L/vTQN9f9lF+s1JzQVxc9+Os7peaE/rjswF+eWUj/At19QAU0iyn0YvqA6uqyn/Lzt9YBVX+6dlB0z7FkqXY/lux2YPaxpMl+04O/ukXvZhk7LHr99w+jc/du7uNQ3t64RjcHQ0+dbKWjuzLVghCeLkO3f7t+QeWcPJ5+RnSivRQr37RPNZ4Mg4JGX65HJm8L5pnRCfZYeZpu1US70Zw1KSj0DyvPXRXJA6LjTjB394jr3N9kZhnoC/MMoT9sRqpsokftQxeoLmTwaSM71Wil7brwxKcFUFNw/6cFaY56TBza3H0CWl3C4VSj5o8DrODob25/nkB8nxA+KAnoAT2gB/SAHtBPR34D7eERZ7UlLCcAAAAASUVORK5CYII=';

const buffer = Buffer.from(imgStr.split(/,\s*/)[1],'base64');
pngToJpeg({quality: 90})(buffer).then(output => fs.writeFileSync("codegym.jpg", output));