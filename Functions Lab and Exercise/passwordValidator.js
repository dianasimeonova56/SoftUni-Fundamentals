function passwordValidator(password) {
    let validLength = lengthCheck(password);
    let validSpecialChar = checkSpecialChars(password);
    let hasTwoDigits = checkDigitsCount(password);
    result(validLength, validSpecialChar, hasTwoDigits);


    function checkSpecialChars(password) {
        for (let ch of password) {
            let num = ch.charCodeAt(0);
            let validNum = numberCheck(num);
            let upperCase = upperCaseCheck(num);
            let lowerCase = lowercaseCheck(num);
            if (!validNum && !upperCase && !lowerCase) {
                return false;
            }
            

        }
        return true;
    }

    function lengthCheck(password) {
        return password.length >= 6 && password.length <= 10;
    }

    function numberCheck(password) {
        return password >= 48 && password <= 57;
    }

    function upperCaseCheck(password) {
        return password >= 65 && password <= 90;
    }

    function lowercaseCheck(password) {
        return password >= 97 && password <= 122;
    }

    function checkDigitsCount (password){
        let counter = 0;
        for (let ch of password){
            let isNumber = numberCheck(ch.charCodeAt(0));
            if (isNumber){
                counter++;
            }
        }
        if (counter >= 2) {
            return true;
        }
        return false;
    }

    function result (validLength, validSpecialChar, hasTwoDigits){
        if (!validLength) {
            console.log("Password must be between 6 and 10 characters")
        }
        if (!validSpecialChar) {
            console.log("Password must consist only of letters and digits")
        }
        
        if (!hasTwoDigits){
            console.log("Password must have at least 2 digits")
        }
        if (validLength && validSpecialChar && hasTwoDigits){
            console.log("Password is valid")
        }
    }

} passwordValidator("Pa$s$s")