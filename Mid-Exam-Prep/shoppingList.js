function shoppingList(input) {
    let list = input.shift().split("!");

    while (input[0] != "Go Shopping!") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        if (command == "Unnecessary") {
            let item = tokens[1];
            if (list.includes(item)) {
                let index = list.indexOf(item);
                list.splice(index, 1);
            } else {
                continue;
            }
        } else if (command == "Correct") {
            let oldItem = tokens[1];
            let newItem = tokens[2];
            if (list.includes(oldItem)) {
                let index = list.indexOf(oldItem);
                list.splice(index, 1, newItem);
            } else {
                continue;
            }
        } else if (command == "Urgent") {
            let item = tokens[1];
            if (!list.includes(item)) {
                list.unshift(item)
            } else {
                continue;
            }
        } else if (command == "Rearrange") {
            let item = tokens[1];
            if (list.includes(item)) {
                let index = list.indexOf(item);
                let add = list.splice(index, 1);
                list.push(add)
            } else {
                continue;
            }
        }
    }
    let result = "";
    for (let i = 0; i < list.length; i++){
        if (i == list.length - 1){
            result += list[i]
        } else {
            result += list[i] + ", "
        }
    }
    console.log(result)

} shoppingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
