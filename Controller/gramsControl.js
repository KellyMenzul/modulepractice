const {gram} = require('../ConversionsOps')

const gramController = (req, res) => {
    res.json(gram(req.query.number, req.query.unit))
}

module.exports = {gramController}