function inventory(input) {
    let items = input.shift().split(', ');

    while (input[0] != "Craft!") {
        let tokens = input.shift().split(" - ");
        let command = tokens[0];

        if (command == "Collect") {
            let item = tokens[1];
            if (items.includes(item)) {
                continue;
            } else {
                items.push(item);
            }
        } else if (command == "Drop") {
            let item = tokens[1];
            if (items.includes(item)) {
                let index = items.indexOf(item);
                items.splice(index, 1)
            } else {
                continue;
            }
        } else if (command == "Combine Items") {
            let itemsToCombine = tokens.pop().split(':');
            let oldItem = itemsToCombine[0];
            let newItem = itemsToCombine[1];

            if (items.includes(oldItem)) {
                let index = items.indexOf(oldItem);
                if (index >= 0) { 
                items.splice(index + 1, 0, newItem)
                }
            } else {
                continue;
            }
        } else if (command == "Renew") {
            let item = tokens[1];
            if (items.includes(item)) {
                let index = items.indexOf(item);
                if (index >= 0) {
                items.splice(index, 1);
                items.push(item);
                }
            } else {
                continue;
            }
        }
    }
    if (input[0] == "Craft!") {
        console.log(items.join(', '))
    }
} inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]

)