function perfectNumber(num) {
    let divisorsSum = checkDivisors(num);
    
    if (divisorsSum === num){
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.")
    }

    function checkDivisors(num) {
        let sum = 0;
        for (let i = 1; i < num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum;
    }
} perfectNumber(6)