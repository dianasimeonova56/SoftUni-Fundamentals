function smallestTwoNumbers(arr) {
    let sort = arr.sort((a,b) => {
        return a - b;
    });
    let smallestTwo = arr.slice(0, 2);
    console.log(smallestTwo.join(' '))
}smallestTwoNumbers([30, 15, 50, 5])