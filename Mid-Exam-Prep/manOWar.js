function manOWar(input) {
    let pirateShip = input.shift().split(">").map(Number);
    let warShip = input.shift().split(">").map(Number);
    let maxHealth = Number(input.shift());

    while (input[0] != "Retire") {
        let tokens = input
            .shift()
            .split(' ');
        let command = tokens[0];
        if (command == 'Fire') {
            let index = Number(tokens[1]);
            let damage = Number(tokens[2]);
            if (warShip[index] !== undefined) {
                warShip[index] -= damage;
                if (warShip[index] <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                }
            } else {
                continue;
            }
        } else if (command == "Defend") {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let damage = Number(tokens[3]);
            if (pirateShip[startIndex] !== undefined && pirateShip[endIndex] !== undefined) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= damage;
                    if (pirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            } else {
                continue;
            }
        } else if (command == "Repair") {
            let index = Number(tokens[1]);
            let health = Number(tokens[2]);
            if (pirateShip[index] !== undefined) {
                pirateShip[index] += health;
                if (pirateShip[index] > maxHealth) {
                    pirateShip[index] = maxHealth
                }
            } else {
                continue;
            }
        } else if (command == "Status") {

            let needsRepair = 0;
            for (let i = 0; i < pirateShip.length; i++) {
                if (pirateShip[i] < (maxHealth * 0.2)) {
                    needsRepair++;
                }
            }
            console.log(`${needsRepair} sections need repair.`)
        }

    }
    let sumOfPirateSections = 0;
    for (let i = 0; i < pirateShip.length; i++) {
        sumOfPirateSections += pirateShip[i];
    }
    let sumOfWarShipSections = 0;
    for (let i = 0; i < warShip.length; i++) {
        sumOfWarShipSections += warShip[i];
    }

    if (input[0] == "Retire") {
        console.log(`Pirate ship status: ${sumOfPirateSections}`)
        console.log(`Warship status: ${sumOfWarShipSections}`)
    }

}