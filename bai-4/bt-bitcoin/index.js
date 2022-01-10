const axios = require('axios').default

axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(result=>{
        if (result.status === 200) {
            console.log(result.data.disclaimer)
            for (const key in result.data.bpi) {
                if (Object.hasOwnProperty.call(result.data.bpi, key)) {
                    const item = result.data.bpi[key]
                    console.log(`1 Bitcoin = ${item.rate} ${item.code} (${item.description})`)
                }
            }
         
        }
    })