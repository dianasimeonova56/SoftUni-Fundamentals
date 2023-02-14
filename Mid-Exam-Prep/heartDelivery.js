function heartDelivery(input) {
    let houses = input.shift().split('@').map(Number)
    let cupid = 0;

    while (input[0]!= "Love!"){
        let tokens = input.shift().split(' ');
        let jump = Number(tokens[1]);

        cupid += jump;

        if (cupid >= houses.length){
            cupid = 0;
        }

        if (houses[cupid] == 0){
            console.log(`Place ${cupid} already had Valentine's day`);
        } else {
            houses[cupid] -= 2;
            if (houses[cupid] == 0) {
                console.log(`Place ${cupid} has Valentine's day`)
            }
        }
    }
    let missed = houses.filter(x => x > 0)
    console.log(`Cupid's last position was ${cupid}.`);
    
    if (missed > 0) {
        console.log(`Cupid has failed ${missed}.`)
    } else {
        console.log("Mission was successful.")
    }
}