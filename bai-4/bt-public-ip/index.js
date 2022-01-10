const axios = require('axios').default

axios.get('https://ip-fast.com/api/ip/')
    .then(result=>{
        if (result.status === 200) {
            console.log(`Your Public IP: ${result.data}`)
        }
    })