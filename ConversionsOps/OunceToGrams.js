const CookingConverter = (value, unit) =>{
    if(unit === "G"){
        const Ounces = value / 28.35
        return Ounces
    }
    
    if(unit === "Oz"){
        const Grams = value * 28.35
        return Grams
    }
}

module.exports = CookingConverter

//http://localhost:3000/cookingConverter?value=100&unit=oz