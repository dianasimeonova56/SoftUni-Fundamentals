function numbers(input) {
    let numbers = input.shift().split(' ').map(Number);

    while (input[0] != "Finish") {
        let tokens = input.shift().split(' ');
        let command = tokens[0];

        if (command == "Add") {
            let value = Number(tokens[1]);
            numbers.push(value);
        } else if (command == "Remove") {
            let value = Number(tokens[1]);
            if (numbers.includes(value)) {
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] === value) {
                        numbers.splice(i, 1);
                        break;
                    }
                }
            } else {
                continue;
            }
        } else if (command == "Replace") {
            let value = Number(tokens[1]);
            let replacement = Number(tokens[2]);
            if (numbers.includes(value)) {
                for (let i = 0; i < numbers.length; i++) {
                    if (numbers[i] === value) {
                        numbers.splice(i, 1, replacement);
                        break;
                    }
                }
            } else {
                continue;
            }
        } else if (command == "Collapse") {
            let value = Number(tokens[1]);
            for (let i = numbers.length; i >= 0; i--) {
                if (numbers[i] < value) {
                    numbers.splice(i, 1);
                }
            }
        }
    }
    console.log(numbers.join(' '))

} numbers(["5 9 70 -56 9 9",
"Collapse 100",
"Finish"])








