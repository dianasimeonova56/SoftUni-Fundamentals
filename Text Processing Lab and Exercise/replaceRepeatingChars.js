function replaceRepeatingChars(str) {
    let result = str[0];

    for (let i = 1; i < str.length; i++) {
        const current = str[i];
        const previous = str[i - 1]
        if (current != previous) {
            result += current;
        }
    }
    console.log(result)
} replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')