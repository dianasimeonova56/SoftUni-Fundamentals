function secretChat(input) {
    let commands = {
        InsertSpace,
        Reverse,
        ChangeAll
    }

    let text = input.shift();

    while (input[0] != "Reveal") {
        let tokens = input.shift().split(":|:");
        let name = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        let command = commands[name];
        text = command(text, p1, p2);
    }
    console.log(`You have a new text message: ${text}`);

    function InsertSpace(text, index) {
        index = Number(index)
        let left = text.slice(0, index);
        let right = text.slice(index);

        let result = left + " " + right;
        console.log(result);
        return result;
    }
    function Reverse(text, substring) {
        let index = text.indexOf(substring);

        if (index != -1) {
            let left = text.slice(0, index);
            let right = text.slice(index + substring.length);
            let result = left + right + substring.split('').reverse().join("");

            console.log(result);
            return result;
        } else {
            console.log("error");
            return text;
        }
    }
    function ChangeAll(text, substring, replacement) {
        let result = text.split(substring).join(replacement);
        console.log(result);
        return result;

    }
} secretChat([

    'Hiware?uiy',
    
    'ChangeAll:|:i:|:o',
    
    'Reverse:|:?uoy',
    
    'Reverse:|:jd',
    
    'InsertSpace:|:3',
    
    'InsertSpace:|:7',
    
    'Reveal'
    
    ])