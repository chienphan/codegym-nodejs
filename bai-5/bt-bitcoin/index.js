const axios = require('axios').default
const fs = require('fs')

axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(result=>{
        if (result.status === 200) {
            fs.writeFile("currentprice.json", JSON.stringify(result.data), function(err) {
                if (err) {
                    console.log(err);
                }
            });
        }
    })
