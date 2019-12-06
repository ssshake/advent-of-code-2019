const modules = require('./input.json')

const calculateFuel = (mass) => {
    return Math.floor(mass / 3) - 2;
}

let fuelPerModule = modules.map((mass) => {
    let currentResult = mass
    let fuel = 0

    do {
        currentResult = calculateFuel(currentResult)

        if (currentResult < 0 ){
            currentResult = 0
        }

        fuel += currentResult;

    } while ( currentResult > 0)

    return fuel
})

console.log(fuelPerModule.reduce((a, b) => a + b))


