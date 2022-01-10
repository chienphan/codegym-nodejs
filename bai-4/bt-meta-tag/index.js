const axios = require('axios').default

axios.get('https://list.ly/api/v4/meta?url=https://codegym.vn')
    .then(result=>{
        if (result.status === 200) {
            for (const key in result.data.metadata) {
                if (Object.hasOwnProperty.call(result.data.metadata, key)) {
                    const item = result.data.metadata[key]
                    if (key === 'images') {
                        console.log('images:');
                        item.forEach(imageUrl => {
                            console.log(imageUrl);
                        });
                    } else {
                        console.log(`${key}: ${item}`)
                    }
                    
                }
            }
        }
    })