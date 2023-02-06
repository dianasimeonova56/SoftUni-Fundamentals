function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let numAsString = i.toString();
        let sum = 0;
        for (let j = 0; j < numAsString.length; j++) {
            let curChar = numAsString[j];
            let charAsNumber = Number(curChar);
            sum += charAsNumber;
        }

        let isSpecial = (sum === 5 || sum === 7 || sum === 11);
        console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`);
    }
} specialNumbers(20)