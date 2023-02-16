function memoryGame(input) {
    let sequence = input.shift().split(' ');
    let movesCounter = 0;

    //until we recieve "end"-> read indexes (while loop) 
    //indexes should be different
    while (input[0] != "end") {
        let indexes = input.shift().split(' ').map(Number);
        let index1 = indexes[0];
        let index2 = indexes[1];
        
        
        if (sequence.length === 0 || sequence.length === 1) {
            //if u hit all matching elements before "end", print=>
            //"You have won in {number of moves until now} turns!"
            break;
        }

        movesCounter++;

        if (index1 === index2 || sequence[index1] === undefined || sequence[index2] === undefined) {
            //if cheating(entering equal indexes/indexes out of bounds)->
            //add two matching elements in the middle=> -{number of moves until now}a
            //then print -> "Invalid input! Adding additional elements to the board"

            console.log("Invalid input! Adding additional elements to the board");
            let addItem = '-' + movesCounter + "a"
            sequence.splice((sequence.length) / 2, 0, addItem, addItem);
            continue;
        }

        if (sequence[index1] === sequence[index2]) {
            //when u hit two matching elements=> remove from sequence, print=>
            //"Congrats! You have found matching elements - ${element}!"
            let equalElement = sequence[index1];
            console.log(`Congrats! You have found matching elements - ${equalElement}!`)
            if (index1 > index2) {
                sequence.splice(index1, 1);
                sequence.splice(index2, 1);
            } else {
                sequence.splice(index2, 1);
                sequence.splice(index1, 1);
            }
            
        } else {
            console.log("Try again!");
            continue;
        }
    
    }

    if (sequence.length > 1) {
        //if u recieve "end" before hitting all elements, print=>
        //"Sorry you lose :(
        //{the current sequence's state}"
        console.log("Sorry you lose :(");
        console.log(`${sequence.join(' ')}`)
    } else{
        console.log(`You have won in ${movesCounter} turns!`)
    }
} memoryGame( [
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0",
    "-1 0",
    "1 0", 
    "1 0", 
    "1 0", 
    "end"
    ]
    

)

