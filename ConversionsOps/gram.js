const gram = (number, unit) => {
    if (unit === 'mg') {
        const gramData = {
            gram: (number / 1000),
            unit: 'g'
        } 
        return gramData
    } 
    if (unit === 'g') {
        const gramData = {
            gram: (number * 1000),
            unit: 'mg'
        } 
        return gramData
    }
}

module.exports = gram

//http://localhost:3000/gramconversion?number=100&unit=g