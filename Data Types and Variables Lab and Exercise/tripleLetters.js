function tripleLetters(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                let char1 = String.fromCharCode(97+i);
                let char2 = String.fromCharCode(97+j);
                let char3 =  String.fromCharCode(97+k);
                console.log(`${char1}${char2}${char3}`)
            }
        }
    }
}