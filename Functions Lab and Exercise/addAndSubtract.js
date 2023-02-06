function addAndSubtract(n1, n2, n3) {
    let sumNumbers = sum(n1, n2);
    let subtraction = subtract(sumNumbers, n3);

    return subtraction;

    function sum (n1, n2){
        return n1 + n2;
    }

    function subtract (sum, n3) {
        return sum - n3;
    }

    
} console.log(addAndSubtract(23, 6, 10))

