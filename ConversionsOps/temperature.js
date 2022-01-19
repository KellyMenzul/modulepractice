const temperature = (a, unit)=>{
    //Farenhiet to Celcius
    if(unit === "f" || unit === "F"){
        return ((a - 30) / 2)
    }

    //Celcius to Farenhiet
    if(unit === "c" || unit === "C"){
        return ((a * 1.8000) +  32)
    }
}

module.exports = temperature