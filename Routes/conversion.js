const express = require('express')
const router = express.Router()

const {temperatureController, gramController, cookingController, convertController} = require('../Controller/conversion.js')

router.get('/temperatureconversion', temperatureController)
router.get('/gramconversion', gramController)
router.get('/cookingconversion', cookingController)
router.get('/moneyconversion', convertController)

module.exports = router