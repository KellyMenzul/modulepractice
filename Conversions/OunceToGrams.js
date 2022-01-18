/*const OunceToGrams = (Ounce) =>{
    const Grams = Ounce * 28.35
    return Grams
}*/

const CookingConverter = (value, unit) =>{
    if(unit === "Grams"){
        const Ounces = value / 28.35
        return Ounces
    }
    if(unit === "Ounces"){
        const Grams = value * 28.35
        return Grams
    }
}

module.export = CookingConverter
