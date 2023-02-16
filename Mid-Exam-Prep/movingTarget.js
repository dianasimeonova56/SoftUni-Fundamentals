function movingTarget(input) {
    let targets = input.shift().split(" ").map(Number);

while (input[0] != "End") {
    let tokens = input.shift().split(' ');
    let command = tokens[0];

    if (command == "Shoot") {
        let index = Number(tokens[1]);
        let power = Number(tokens[2]);
        shoot(index, power, targets);
    } else if (command == "Add") {
        let index = Number(tokens[1]);
        let valueAdd = Number(tokens[2]);
        add(index, valueAdd, targets);
    } else if (command == "Strike") {
        let index = Number(tokens[1]);
        let radius = Number(tokens[2]);
        strike(index, radius, targets);
    }
}
if (input[0] == "End") {
    console.log(targets.join('|'))
    }

function shoot(index, power, targets){
    if (targets[index] != undefined) {
        targets[index] -= power; 
    } else {
        return;
    }
    if (targets[index] <= 0) {
        targets.splice(index, 1)
    }
}

function add(index, valueAdd, targets) {
    if (targets[index] != undefined) {
        targets.splice(index, 0, valueAdd);
    } else {
        return console.log("Invalid placement!");
    }
}

function strike(index, radius, targets) {
    let targetsToRemove = radius * 2 + 1;
    let startIndex = index - radius;
    if (startIndex < 0 || radius > targets.length) {
        return console.log("Strike missed!");
    }
    targets.splice(startIndex, targetsToRemove);
}


} movingTarget(["1 2 3 4 5",
"Strike 0 1",
"End"])
