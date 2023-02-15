function treasureHunt(input) {
    let initialLoot = input
        .shift()
        .split("|");

    while (input[0] !== "Yohoho!") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        if (command == "Loot") {
            loot(initialLoot, tokens)
        } else if (command == "Drop") {
            drop(initialLoot, tokens);
        } else if (command == "Steal") {
            steal(initialLoot, tokens);
        }
    }
    let sumLengths = 0;
    let countOfItems = 0;
    for (let j = 0; j < initialLoot.length; j++) {
        countOfItems++;
        sumLengths += initialLoot[j].length;
    }

    let averageTreasureGain = sumLengths / countOfItems;
    if (initialLoot.length <= 0) {
        console.log("Failed treasure hunt.");
    } else {
        console.log(`Average treasure gain: ${averageTreasureGain.toFixed(2)} pirate credits.`)
    }


    function steal(initialLoot, tokens) {
        let count = Number(tokens[1]);
        if (count > initialLoot.length) {
            count = initialLoot.length;
        }
        let print = '';
        let remove = initialLoot.slice(-count);
        for (let i = 0; i < count; i++) {
            initialLoot.pop();
            if (i == count - 1) {
                print += remove[i];
            } else {
                print += remove[i] + ", "
            }
        }
        return console.log(print);
    }

    function drop(initialLoot, tokens) {
        let index = Number(tokens[1]);
        if (index >= 0 && index < initialLoot.length) {
            let droppedItem = initialLoot.splice(index, 1);
            initialLoot.push(droppedItem[0])
        } else {
            return;
        }

    }

    function loot(initialLoot, tokens) {
        for (let i = 1; i < tokens.length; i++) {
            let item = tokens[i];
            if (initialLoot.includes(item)) {
                continue;
            } else {
                initialLoot.unshift(item);
            }
        }
    }
}




treasureHunt(["Diamonds|Silver|Shotgun|Gold", "Loot Silver Medals Coal", "Drop -1", "Drop 1", "Steal 6", "Yohoho!"])