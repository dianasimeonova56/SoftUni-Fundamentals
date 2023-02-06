function charsInRange(ch1, ch2) {
    let numFromChOne = ch1.charCodeAt(0);
    let numFromChTwo = ch2.charCodeAt(0);

    let startIndex = smallerNum(numFromChOne, numFromChTwo);
    let endIndex = biggerNum(numFromChOne, numFromChTwo);

    let buff = " ";

    for (let i = startIndex + 1 ; i < endIndex; i++) {
        buff += String.fromCharCode(i) + " ";
    }
    return buff;

    function smallerNum (a, b) {
       return Math.min(a, b);

    }

    function biggerNum (a, b) {
        return Math.max(a, b);
    }
} console.log(charsInRange("C", "#"))
