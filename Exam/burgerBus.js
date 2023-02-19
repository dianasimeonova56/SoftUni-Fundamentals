function burgerBus(input) {
    let numOfCities = Number(input.shift());
    let totalProfit = 0;
    //every 3rd city, special event, spending additional 50% over costs
    //every 5th city, raining, lose 10% of the money
    //in a rainy city no posibillity for a special event

    //calculate profit for each city,
    //total profit (deducting expenses frim the income)

    for (let i = 1; i <= numOfCities; i++) {
        if (i == undefined) {
            break;
        }
        let city = input.shift();
        let earnedMoney = Number(input.shift());
        let expenses = Number(input.shift());

        let dailyProfit = earnedMoney - expenses;
        if (i % 3 == 0) {
            if (i % 5 == 0) {
                dailyProfit -= earnedMoney * 0.1;
                console.log(`In ${city} Burger Bus earned ${dailyProfit.toFixed(2)} leva.`)
                totalProfit += dailyProfit;
                continue;
            } else {
                dailyProfit -= expenses * 0.5;
            }
        }
        if (i % 5 == 0) {
            dailyProfit -= earnedMoney * 0.1;
        }
        console.log(`In ${city} Burger Bus earned ${dailyProfit.toFixed(2)} leva.`)

        totalProfit += dailyProfit;
    }
        console.log(`Burger Bus total profit: ${totalProfit.toFixed(2)} leva.`)
    
    

} burgerBus(["5",
"Lille",
"2226.00",
"1200.60",
"Rennes",
"6320.60",
"5460.20",
"Reims",
"600.20",
"452.32",
"Bordeaux",
"6925.30",
"2650.40",
"Montpellier",
"680.50",
"290.20"])


