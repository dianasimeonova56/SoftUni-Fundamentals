function sumFirstAndLast(arr) {
    let last = Number(arr.pop());
    let first = Number(arr.shift())
    console.log(last + first);
}
sumFirstAndLast(['5', '10'])