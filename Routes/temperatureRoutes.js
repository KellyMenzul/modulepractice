const express = require('express')
const router = express.Router()
const {temperatureController} = require('../Controller/temperatureControl.js')

router.get('/conversion', temperatureController)


module.exports = router