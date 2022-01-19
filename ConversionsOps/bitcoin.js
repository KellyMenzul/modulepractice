const axios = require('axios')

const getBitcoinPrice = (currency) => {
    axios.get(`https://api.coinbase.com/v2/prices/spot?currency=${currency}`)
    .then((res) => {
        console.log(res.data?.data?.amount)
    })
    .catch((err) => {
        console.log('bad')
    })
}

getBitcoinPrice('Csds')