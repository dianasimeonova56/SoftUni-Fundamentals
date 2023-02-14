function train(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let maxCapacity = Number(arr.shift());

    for (let i = 0; i < arr.length; i++){
        let command = arr[i].split(' ');
        
        if (command.includes("Add")) {
            wagons.push(Number(command[1]));
        } else {
            for (let j = 0; j < wagons.length; j++){
                if (Number(command[0]) + wagons[j] <= maxCapacity) {
                    wagons[j] += Number(command);
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '))
} train (['32 54 21 12 4 0 23',

'75',

'Add 10',

'Add 0',

'30',

'10',

'75'])