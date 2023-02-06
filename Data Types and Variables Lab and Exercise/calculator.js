function calculator(num, operator, anotherNum) {
    let result = 0;
    if (operator === "+") {
        result = num + anotherNum;
        console.log(`${result.toFixed(2)}`);
    } else if (operator === "-"){
        result = num - anotherNum;
        console.log(`${result.toFixed(2)}`);
    } else if (operator === "*") {
        result = num * anotherNum;
        console.log(`${result.toFixed(2)}`);
    } else if (operator === "/") {
        result = num / anotherNum;
        console.log(`${result.toFixed(2)}`);
    }
} calculator (25.5, "+", 3)