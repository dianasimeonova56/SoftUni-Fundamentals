function easterEggs(input) {
    let text = input.shift();
    let valid = null;
    let pattern = /(\#+|@+)(?<colour>[a-z]{3,})(\#+|@+)[^\w\d]*(\/{1,})(?<value>\d+)(\/{1,})/gm

    while ((valid = pattern.exec(text)) !== null) {
        let colour = valid.groups['colour'];
        let value = valid.groups['value'];
        console.log(`You found ${value} ${colour} eggs!`)

    }


} easterEggs([('#@##@red@#/8/@rEd@/2/#@purple@////10/')])