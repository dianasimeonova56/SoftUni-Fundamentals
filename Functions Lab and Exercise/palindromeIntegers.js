function palindromeIntegers (num) {
    for (let i = 0; i < num.length; i++) {
       let numAsString = String(num[i]);
       let reversedNum = reverse(numAsString);
       console.log(checkIfEqual(numAsString, reversedNum));
    }

    function checkIfEqual (stringA, stringB) {
        return stringA === stringB;
    }

    function reverse (string) {
        let buff = "";
        for (let i = string.length - 1; i >= 0; i--){
            buff += string[i];
           }
        return buff;
    }
    
} palindromeIntegers([32,2,232,1010])