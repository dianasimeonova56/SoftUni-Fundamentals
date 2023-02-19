function schoolLibrary(input) {
    let shelf = input.shift().split('&');

    while (input[0] != "Done") {
        let tokens = input.shift().split(' | ');
        let command = tokens[0];

        if (command == "Add Book") {
            let book = tokens[1];
            if (shelf.includes(book)) {
                continue;
            } else {
                shelf.unshift(book)
            }
        } else if (command == "Take Book") {
            let book = tokens[1];
            if (shelf.includes(book)) {
                let index = shelf.indexOf(book);
                if (index >= 0) {
                    shelf.splice(index, 1)
                }
            }
        } else if (command == "Swap Books") {
            let book = tokens[1];
            let indexBook = shelf.indexOf(book);
            let replacement = tokens[2];
            let indexRepl = shelf.indexOf(replacement);
            if (shelf.includes(book) && shelf.includes(replacement)){
                let temp = shelf[indexBook];
                shelf[indexBook] = shelf[indexRepl];
                shelf[indexRepl] = temp;
            } else {
                continue;
            }
        } else if (command == "Insert Book") {
            let book = tokens[1];
            if (shelf.includes(book)) {
                continue;
            } else {
                shelf.push(book);
            }
        } else if (command == "Check Book") {
            let index = tokens[1];
            if (index >= 0 && index < shelf.length) {
                console.log(shelf[index]);
            } else {
                continue;
            }
            
        }
    }

if (input[0] == "Done") {
    console.log(shelf.join(", "))
}

} schoolLibrary (["War and Peace&Hamlet&Ulysses&Madame Bovary",
"Check Book | 2",
"Swap Books | Don Quixote | Ulysses",
"Done"])


