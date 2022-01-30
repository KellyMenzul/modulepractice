const {temperature, gram, CookingConverter, convert } = require('../ConversionsOps')

const temperatureController = (req, res) => {
    res.json(temperature(req.query.temp, req.query.unit))
}

const gramController = (req, res) => {
    res.json(gram(req.query.number, req.query.unit))
}

const cookingController = (req, res) => {
    res.json(CookingConverter(req.query.value, req.query.unit))
}

const convertController = (req, res) => {
    res.json(convert(req.query.amount, req.query.unit))
}

module.exports = {
    temperatureController,
    gramController,
    cookingController,
    convertController
}

