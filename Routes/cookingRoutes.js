const express = require('express')
const router = express.Router()
const {cookingController} = require('../Controller/cookingControl.js')

router.get('/cookingConverter', cookingController)


module.exports = router