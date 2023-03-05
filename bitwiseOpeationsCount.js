function count(number, zeroOrOne) {
    let counter = 0;
    while (number > 0) {
        let leftover = number % 2;
        if (leftover === zeroOrOne) {
            counter++;
        }
        number = Math.floor(number / 2)
    }
    console.log(counter);
} count(20, 0)