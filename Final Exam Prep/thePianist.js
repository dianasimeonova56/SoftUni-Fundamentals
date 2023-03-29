function thePianist(input) {
    let n = input.shift();
    let pieces = {};
    for (let i = 0; i < n; i++) {
        let piecesData = input.shift().split('|');
        let piece = piecesData[0];
        let composer = piecesData[1];
        let key = piecesData[2];

        pieces[piece] = {
            composer,
            key
        }
    }

    while (input[0] != "Stop") {
        let tokens = input.shift().split('|');
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];
        let p3 = tokens[3];

        if (command === "Add") {
            if (!pieces.hasOwnProperty(p1)) {
                pieces[p1] = {
                    composer : p2,
                    key : p3
                }
                 console.log(`${p1} by ${p2} in ${p3} added to the collection!`);
            } else {
                 console.log(`${p1} is already in the collection!`)
            }
        } else if (command === "Remove") {
            if (pieces.hasOwnProperty(p1)) {
                delete pieces[p1];
                 console.log(`Successfully removed ${p1}!`)
            } else {
                console.log(`Invalid operation! ${p1} does not exist in the collection.`)
            }
        } else if (command === "ChangeKey") {
            if (pieces.hasOwnProperty(p1)) {
                pieces[p1].key = p2;
                 console.log(`Changed the key of ${p1} to ${p2}!`)
            } else {
                 console.log(`Invalid operation! ${p1} does not exist in the collection.`)
            }
        }
    }
    
    for (let pieceData of Object.entries(pieces)) {
        let piece = pieceData[0];
        let data = pieceData[1];
        console.log(`${piece} -> Composer: ${data.composer}, Key: ${data.key}`)
    }
}thePianist([
    '4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
  ]
  
  )