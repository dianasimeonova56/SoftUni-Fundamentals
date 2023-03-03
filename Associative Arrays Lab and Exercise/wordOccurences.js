function wordOccurences(input) {
    let result = new Map();
    let words = 0;
    for (let word of input) {
        if (!result.has(word)) {
            words = 1;
        } else {
            words = result.get(word) + 1;
        }
        result.set(word, words);
    }
    let sorted = Array.from(result);
    sorted.sort((a, b) => b[1] - a[1]);

    for (let [word, words] of sorted) {
        console.log(`${word} -> ${words} times`)
    }
}