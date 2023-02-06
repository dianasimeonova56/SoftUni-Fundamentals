function arrayRotation(arr, n) {
    let buffArray = [];
    for (let i = 0; i < n; i++) {
        let currElement = arr[0];
        for (let j = 1; j < arr.length; j++) {
            buffArray.push(arr[j]);
        }
        buffArray.push(currElement);
        arr = buffArray;
        buffArray = [];
    }
    console.log(arr.join(" "))
} arrayRotation([51, 47, 32, 61, 21], 2)