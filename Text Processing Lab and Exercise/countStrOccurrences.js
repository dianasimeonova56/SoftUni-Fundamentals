function countStrOccurrences(text, word) {
    let words = text.split(' ');
    let counter = 0;
    for (let w of words) {
        if (w === word) {
            counter++;
        }
    }
    console.log(counter)
} countStrOccurrences('This is a word and it also is a sentence',

'is')