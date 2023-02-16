function blackFlag(input) {
    let days = Number(input[0]);
    let dailyPlunder = Number(input[1]);
    let expectedPlunder = Number(input[2]);

    let sum = 0;

    for (let i = 1; i <= days; i++) {
        sum += dailyPlunder;
        if (i % 3 == 0){
            sum += dailyPlunder *0.5;
        }
        if (i % 5 == 0) {
            sum -= sum * 0.3;
        }
    }
    if(sum >= expectedPlunder){
        console.log(`Ahoy! ${sum.toFixed(2)} plunder gained.`)
    } else {
        let percentage = (sum / expectedPlunder)*100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`)
    }

}blackFlag(["10",
"20",
"380"])

