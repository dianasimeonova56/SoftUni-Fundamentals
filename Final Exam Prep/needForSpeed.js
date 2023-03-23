function needForSpeed(input) {
    let n = input.shift();

    let cars = {};

    for (let i = 0; i < n; i++) {
        let carData = input.shift().split("|");
        let name = carData[0];
        let mileage = Number(carData[1]);
        let fuel = Number(carData[2]);

        cars[name] = {
            mileage,
            fuel
        }
    }

   while (input[0] != "Stop") {
        let tokens = input.shift().split(" : ");
        let command = tokens[0];
        let name = tokens[1];
        let p1 = Number(tokens[2]);
        let p2 = Number(tokens[3]);

        let car = cars[name];

        if (command == "Drive") {
            if (p2 > car.fuel) {
                console.log("Not enough fuel to make that ride");
            } else {
                car.fuel -= p2;
                car.mileage += p1;
                console.log(`${name} driven for ${p1} kilometers. ${p2} liters of fuel consumed.`)
            }
            if (car.mileage >= 100000) {
                delete cars[name];
                console.log(`Time to sell the ${name}!`);
            }
        } else if (command == "Refuel") {
            let fuel = Math.min((75 - car.fuel), p1);
            car.fuel += fuel;
            console.log(`${name} refueled with ${fuel} liters`);
        } else if (command == "Revert") {
            car.mileage -= p1;
            if (car.mileage < 10000) {
                car.mileage = 10000;
            } else {
                console.log(`${name} mileage decreased by ${p1} kilometers`)
            }
        }
    }

    for (let carData of Object.entries(cars)) {
        let carName = carData[0];
        let car = carData[1];
        console.log(`${carName} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`)
    }



} needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
  
)
