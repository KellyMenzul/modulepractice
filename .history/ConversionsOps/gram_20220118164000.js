const gram = (number, unit) => {
    if (unit = "mg") {
        return number / 1000
    }
    if (unit = "g") {
        return number * 1000
    }
}

module.exports = gram