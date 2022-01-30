const express = require('express')
const app = express()
const conversions = require('./Routes/conversion.js')

app.use(conversions)
app.listen(3000)