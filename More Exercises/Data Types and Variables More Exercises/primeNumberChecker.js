function primNumberChecker(input) {
    let isPrime = true;
    for (let i = 2; i < input; i++) {
        if (input % i === 0) {
            isPrime = false;
        }
    }
    console.log(isPrime)
}