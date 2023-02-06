function oddAndEvenSum(num) {
    num = num.toString();
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < num.length; i++) {
        if (num[i] % 2 === 0){
            evenSum += Number(num[i]);
        } else {
            oddSum += Number(num[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`) 
} oddAndEvenSum (3495892137259234)