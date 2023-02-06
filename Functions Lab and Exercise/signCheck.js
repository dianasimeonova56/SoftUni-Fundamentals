function signCheck(numOne, numTwo, numThree) {
    // (-) * (-) = +
    // (-) * + = (-)
    //Math.sign() ot Num1< 0 - negative// Num1 > 0 - positive
    let sign = "Positive";
    let isNum1Negative = numOne < 0;
    sign = checkAndChangeSign(sign, isNum1Negative);
    let isNum2Negative = numTwo < 0;
    sign = checkAndChangeSign(sign, isNum2Negative);
    let isNum3Negative = numThree < 0;
    sign = checkAndChangeSign(sign, isNum3Negative);
    return sign;

    function checkAndChangeSign(sign, shouldChange) {
        if (shouldChange === false) {
            return sign;
        }

        if (sign === "Positive") {
            sign = "Negative";
        } else {
            sign = "Positive";
        }
        return sign;
    }
} 
console.log(signCheck(5, 12, -15))