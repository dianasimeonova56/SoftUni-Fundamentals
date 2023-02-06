function factorialDivision(num1, num2) {
    let firstFactorialNumber = division(num1);
    let secondFactorialNumber = division(num2);
    console.log((firstFactorialNumber / secondFactorialNumber).toFixed(2))

    function division(num){
        result = 1;
        for (let i = num; num > 1; num -= 2){
            result *= num*(num-1);
        }
        return result;
    }
    
} factorialDivision(6, 2)