const temperature = (temp, unit)=>{
    //Farenhiet to Celcius
    if(unit === "f" || unit === "F"){
        const tempData = {
            temperature: ((temp - 30) / 2),
            unit: 'C'
        }
        return tempData
    }

    //Celcius to Farenhiet
    if(unit === "c" || unit === "C"){
        const tempData = {
            temperature: ((temp * 1.8000) +  32),
            unit: 'F'

        }
        return tempData
    }
}

module.exports = temperature

//http://localhost:3000/temperatureconversion?temp=110&unit=f