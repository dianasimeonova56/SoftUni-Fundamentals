function reverseArrayOfNumbers(n, inputArray) {
    let newArr = [];
    for(let i = n - 1; i >= 0; i--){
        const element = inputArray[i];
        newArr.push(element);
    }
    console.log(newArr.join(" "))

} reverseArrayOfNumbers(3, [10,20,30,40])