function passwordValidator(input) {
    let password = input.shift();
 
    while (input[0] != "Complete") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
 
        if (command === "Make") {
            if (p1 === "Upper") {
                password = makeUpper(p2);
            } else if (p1 === "Lower") {
                password = makeLower(p2);
            }
        } else if (command === "Insert") {
            password = Insert(p1, p2);
        } else if (command === "Replace") {
            password = Replace(p1, p2);
        } else if (command === "Validation") {
            Validation();
        } else {
            continue;
        }
    }
    function makeUpper(index) {
        index = Number(index);
        let result = password;
        if (index !== -1) {
 
            let right = password.slice(0, index);
            let letter = password.slice(index, index + 1);
            let left = password.slice(index + 1);
            result = right + letter.toUpperCase() + left;
            console.log(result);
 
            return result;
        } else {
            return result;
        }
    }
    function makeLower(index) {
        index = Number(index);
        let result = password;
        if (index !== -1) {
 
            let right = password.slice(0, index);
            let letter = password.slice(index, index + 1);
            let left = password.slice(index + 1);
            result = right + letter.toLowerCase() + left;
            console.log(result);
 
            return result;
        } else {
            return result;
        }
    }
    function Insert(index, char) {
        index = Number(index);
        let result = password
        if (password[index] !== -1) {
            let right = password.slice(0, index);
            let left = password.slice(index);
            result = right + char + left;
            console.log(result)
 
            return result;
        } else {
            return result;
        }
    }
    function Replace(char, value) {
        let result = password;
        if (password.includes(char)) {
            value = Number(value);
            let asciiValue = char.charCodeAt(0) + value;
            if (asciiValue < 0 || asciiValue > 127) {
                return result;
            }
            let replacement = String.fromCharCode(asciiValue);
            while (result.includes(char)) {
                result = result.replace(char, replacement);
            }
            console.log(result);
            return result;
        } else {
            return result;
        }
    }
    function Validation() {
        if (password.length < 8) {
            console.log("Password must be at least 8 characters long!");
        }
        if (/[^a-zA-Z0-9_]/.test(password)) {
            console.log("Password must consist only of letters, digits and _!");
        }
        if (/[A-Z]/.test(password) != true) {
            console.log("Password must consist at least one uppercase letter!");
 
        }
        if (/[a-z]/.test(password) != true) {
            console.log("Password must consist at least one lowercase letter!");
 
        }
        if (/\d/.test(password) != true) {
            console.log("Password must consist at least one digit!");
 
        }
    }
} passwordValidator((['123456',
'Insert 3 R',
'Replace 5 15',
'Validation',
'Make Lower 3',
'Complete'])


)