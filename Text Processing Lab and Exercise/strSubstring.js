function strSubstring(word, text) {
    const textArr = text.toLowerCase().split(" ")
    let isFound = false;
    for (let el of textArr) {
        if (el === word) {
            isFound = true;
            console.log(word);
            break;
        }
    }
    if (!isFound) {
        console.log(word, "not found!")
    }
} strSubstring('python',

'JavaScript is the best programming language')