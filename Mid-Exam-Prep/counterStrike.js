function counterStrike(input) {
    let initialEnergy = Number(input.shift());
    let wonBattles = 0;
    //until "End of battle"/initialEnergy == 0 => read distance
    while (input[0] != "End of battle") {
        let distance = Number(input.shift());
        //energy == distance
        if (initialEnergy >= distance) {
            //when u reach an enemy=> battle is won
            wonBattles++;
            initialEnergy -= distance;
            if (wonBattles % 3 == 0) {
                // every third battle => energy + count of won battles
                initialEnergy += wonBattles;
            }
        } else {
            //not enough energy => end program, print "Not enough energy! 
            //Game ends with {count} won battles and {energy} energy".
            console.log(`Not enough energy! Game ends with ${wonBattles} won battles and ${initialEnergy} energy`);
            return;
        }

    }
    if (input[0] == "End of battle") {
        //when input[0]=="End of battle" => "Won battles: {count}. Energy left: {energy}" 
        console.log(`Won battles: ${wonBattles}. Energy left: ${initialEnergy}`)
    }


} counterStrike((["200",
"54",
"14",
"28",
"13",
"End of battle"])

)