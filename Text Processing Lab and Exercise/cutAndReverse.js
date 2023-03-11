function cutAndReverse(str) {
    const middle = str.length / 2;
    const firstHalf = str
    .substring(0, middle)
    .split('')
    .reverse()
    .join('')
    const secondHalf = str
    .substring(middle)
    .split('')
    .reverse()
    .join('')
    
    console.log(firstHalf);
    console.log(secondHalf)
}