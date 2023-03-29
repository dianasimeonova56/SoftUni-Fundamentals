function adAstra(input) {
    let text = input.shift();
    let pattern = /([|]|#)(?<food>[A-Za-z\s]+)\1(?<expdate>[{\d}]{2}[\/][{\d}]{2}[\/][{\d}]{2})\1(?<calories>\d{1,5})\1/g;
    let totalCalories = 0;
    let foods = [];
    let matches = pattern.exec(text);

    while (matches) {
        foods.push({food: matches[2], expDate: matches[3], calories: matches[4]});
        totalCalories += Number(matches[4]);
        matches = pattern.exec(text);
    }
    console.log(`You have food to last you for: ${Math.floor(totalCalories / 2000)} days!`);
    for (let i = 0; i < foods.length; i++) {
        console.log(`Item: ${foods[i].food}, Best before: ${foods[i].expDate}, Nutrition: ${foods[i].calories}`)
    }
    


} adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@']
)