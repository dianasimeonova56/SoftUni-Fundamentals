function sortNumbers(firstNum, secondNum, thirdNum) {
    let arrayNumbers = [];
    arrayNumbers.push(firstNum, secondNum, thirdNum);
    let sorted = arrayNumbers.sort(); //(a, b) => b - a ----> when we want descending order
    let reverse = sorted.reverse() //reverses in descending order
    console.log(reverse.join('\n'));

} sortNumbers(2,1,3)
