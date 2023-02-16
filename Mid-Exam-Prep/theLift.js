function theLift(input) {
    let waiting = Number(input.shift())
    let lift = input.shift().split(" ").map(Number);
    let wagon = 0;

    for (let i = 0; i < lift.length; i++) {
        
        while (lift[i] < 4 && waiting > 0){
            lift[i]++;
            waiting--;
        }
    }
    if (waiting > 0) {
        console.log(`There isn't enough space! ${waiting} people in a queue!`)
        console.log(`${lift.join(' ')}`)
    } else if (waiting === 0 && lift[lift.length - 1] === 4) {
        console.log(`${lift.join(' ')}`)
    } else  {
        console.log("The lift has empty spots!");
        console.log(`${lift.join(' ')}`)
    }



} theLift(
    [ '20', '0 2 0' ]
)