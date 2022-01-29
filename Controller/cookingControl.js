const {CookingConverter} = require('../ConversionsOps')

const cookingController = (req, res) => {
    res.json(CookingConverter(req.query.value, req.query.unit))
}

module.exports = {cookingController}

