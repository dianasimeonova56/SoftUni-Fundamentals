function pirates(input) {
    let cityTargets = {};

    while (input[0] != "Sail") {
        let tokens = input.shift().split("||");
        let city = tokens[0];
        let population = Number(tokens[1]);
        let gold = Number(tokens[2]);
        if (cityTargets.hasOwnProperty(city)) {
            let add = cityTargets[city];
            add.population += population;
            add.gold += gold;
        } else {
            cityTargets[city] = {
                population,
                gold
            }
        }
    }



    while (input[0] != "End") {
        let tokens = input.shift().split('=>');
        let command = tokens[0];

        let name = tokens[1];
        let p1 = Number(tokens[2]); // population, gold
        let p2 = Number(tokens[3]); // gold

        let town = cityTargets[name];

        if (command === "Plunder") {
            console.log(`${name} plundered! ${p2} gold stolen, ${p1} citizens killed.`);
            town.gold -= p2;
            town.population -= p1;
            if (town.population <= 0 || town.gold <= 0) {
                delete cityTargets[name];
                console.log(`${name} has been wiped off the map!`);
            }
            

        } else if (command === "Prosper") {
            if (p1 < 0) {
                console.log("Gold added cannot be a negative number!");
                continue;
            } else {
                town.gold += p1;
                console.log(`${p1} gold added to the city treasury. ${name} now has ${town.gold} gold.`);
            }

        } else if (command === "Sail") {
            continue;
        }
    }
    if (Object.values(cityTargets).length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!")
    } else {
        let count = 0;
        for (let town of Object.entries(cityTargets)) {
            count++;
        }
        console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
        for (let townData of Object.entries(cityTargets)) {
            let townName = townData[0];
            let town = townData[1];
            console.log(`${townName} -> Population: ${town.population} citizens, Gold: ${town.gold} kg`)

        }
    }



} pirates((["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])

)