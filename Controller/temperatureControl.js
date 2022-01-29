const {temperature} = require('../ConversionsOps')

const temperatureController = (req, res) => {
    res.json(temperature(req.query.temperature, req.query.unit))
}

module.exports = {temperatureController}

