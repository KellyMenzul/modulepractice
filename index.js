// const express = require('express')
// const app = express()
 
const http = require('http')
const url = require('url')
const {  gram, temperature, convert, CookingConverter } = require('./ConversionsOps')

const app = http.createServer((req, res)=>{
switch(url.parse(req.url).pathname){
    case '/temperature':
        const queriesTemp = url.parse(req.url, true).query
        res.end(JSON.stringify(temperature(queriesTemp.temp, queriesTemp.unit)))
        break
        
    case '/grams':
        const queriesGram = url.parse(req.url,true).query
        console.log(queriesGram)
         res.end(JSON.stringify(gram(queriesGram.number, queriesGram.unit)))
        break

    case '/money':
        const queriesMoney = url.parse(req.url, true).query
        res.end(JSON.stringify(convert(queriesMoney.dollars, queriesMoney.unit)))
        break

    case '/cookingConverter':
        const queriesCooking = url.parse(req.url, true).query
        res.end(JSON.stringify(CookingConverter(queriesCooking.value, queriesCooking.unit)))
        break
    
    default:
        res.end()

}
})
app.listen(3000)