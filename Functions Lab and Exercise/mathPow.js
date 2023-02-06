function mathPow (num, pow) {
    let numPowed = 1;
    for (let i = 1; i <= pow; i++) {
        numPowed *= num;
    }
    console.log(numPowed)
} mathPow(2, 8)