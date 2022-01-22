const convert= (a, unit)=>{

        //USD to CAD
        if(unit === "usd" || unit === "USD"){
            const moneyData = {
                dollars: (a * 1.25),
                unit: 'CAD'
            }
            return moneyData
        }
    
        //CAD to USD
        if(unit === "cad" || unit === "CAD"){
            const moneyData = {
                dollars: (a * 0.795),
                unit: 'USD'
            }
            return moneyData
        }
}

module.exports = convert

//http://localhost:3000/money?dollars=10&unit=CAD