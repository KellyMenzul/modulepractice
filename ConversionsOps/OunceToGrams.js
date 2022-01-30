const CookingConverter = (value, unit) =>{
    if(unit === "g"){ //Grams
        const cookingData = {
            ounces: value / 28.35,
            unit: 'oz'
        }
        return cookingData
    }
    
    if(unit === "oz"){ //Ounces
        const cookingData = {
            grams: value / 28.35,
            unit: 'g'
        }
        return cookingData
    }
}

module.exports = CookingConverter


//http://localhost:3000/cookingconversion?value=100&unit=oz