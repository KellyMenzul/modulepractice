const express = require('express')
const router = express.Router()
const {gramController} = require('../Controller/gramsControl.js')

router.get('/gramconversion',gramController)

module.exports = router