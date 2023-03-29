function theImitationGame(input) {
    let ecryptedMessage = input.shift();

    while(input[0] != "Decode") {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
        
        if (command == "Move") {
            ecryptedMessage = Move(p1, ecryptedMessage);
        } else if (command == "Insert") {
            ecryptedMessage = Insert(p1, p2, ecryptedMessage);
        } else if (command == "ChangeAll") {
            ecryptedMessage = ChangeAll(p1, p2, ecryptedMessage)
        }
    }
    console.log(`The decrypted message is: ${ecryptedMessage}`)


    function Move(n, text) {
        //let letters = text.split('');
        let left = text.slice(0, n);
        let right = text.slice(n);
        let result = right + left;
        return result;
    }
    function Insert(index, value, text) {
        index = Number(index);
        let left = text.slice(0, index);
        let right = text.slice(index);

        let result = left + value + right;
        return result;
    }
    function ChangeAll(substring, replacement, text) {
        let result = text.split(substring).join(replacement);
        return result;
    }

} theImitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]
  
  )