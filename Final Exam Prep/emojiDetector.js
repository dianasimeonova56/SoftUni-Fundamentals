function emojiDetector(input) {
    let text = input.shift();
    let wordPattern = /(:{2}|\*{2})([A-Z][a-z]{2,})(\1)/gm;
    let digitsPattern = /\d+/gm;
    let wordMatches = text.match(wordPattern);
    let digitMatches = text.match(digitsPattern);
    let coolnes = 1;
    let wordValue = 0;
    let coolnesThreshold = [];
    let counter = 0;

    for (let digits of digitMatches) {
        digits = digits.split('').map(Number);
        for (let i = 0; i < digits.length; i++) {
            coolnes *= digits[i]
        }

    }
    console.log(`Cool threshold: ${coolnes}`);

    for (let match of wordMatches) {
        counter++;
        let word = "";
        if (match.includes("::")) {
            word = match.split('::');
        } else {
            word = match.split("**");
        }
        word = word.filter(entry => entry);
        word = word[0].split('')
        for (let i = 0; i < word.length; i++) {
            wordValue += word[i].charCodeAt(0);
        }
        if (wordValue > coolnes) {
            coolnesThreshold.push(match);
        }
        wordValue = 0;
    }
    console.log(`${counter} emojis found in the text. The cool ones are:`);
    for (let i = 0; i < coolnesThreshold.length; i++) {
        console.log(coolnesThreshold[i])
    }
} emojiDetector((["It is a long established fact that 1 a reader will be distracted by 9 the readable content of a page when looking at its layout. The point of using ::LoremIpsum:: is that it has a more-or-less normal 3 distribution of 8 letters, as opposed to using 'Content here, content 99 here', making it look like readable **English**."]));