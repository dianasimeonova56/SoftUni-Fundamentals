function commonElements(firstArray, secondArray) {
    for (let el of firstArray) {
        if (secondArray.includes(el)) {
            console.log(el)
        }
    }
} commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

['s', 'o', 'c', 'i', 'a', 'l'])