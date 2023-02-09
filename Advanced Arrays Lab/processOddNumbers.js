function processOddNumbers(arr) {
    let result = arr
        .filter((x, i) => i % 2 === 1)
        .map(x => 2 * x)
        .reverse();
        return result.join(' ')
}processOddNumbers([10, 15, 20, 25])