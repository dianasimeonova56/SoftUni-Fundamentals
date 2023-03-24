function passwordReset(input) {
    let string = input.shift();

    while (input[0] != "Done") {
        let tokens = input.shift().split(" ");
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command == "TakeOdd") {
            string = TakeOdd(string);
        } else if (command == "Cut") {
            string = Cut(string, p1, p2);
        } else if (command == "Substitute") {
            string = Substitute(string, p1, p2);
        }

    }
    console.log(`Your password is: ${string}`);

    function TakeOdd(string) {
        let newPass = "";
        for (let i = 0; i < string.length; i++) {
            if (!(i % 2 == 0)) {
                newPass += string[i];
            }
        }
        console.log(newPass);
        return newPass;
    }
    function Cut(string, index, length) {
        index = Number(index);
        length = Number(length);
        let left = string.slice(0, index);
        let right = string.slice(index + length);
        let result = left + right;
        console.log(result);

        return result;
    }
    function Substitute(string, substring, substitute) {
        if (string.includes(substring)) {
            string = string.split(substring).join(substitute);
            console.log(string);
            return string;
        } else {
            console.log('Nothing to replace!');
            return string
        }

    }

} passwordReset((["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"])

)