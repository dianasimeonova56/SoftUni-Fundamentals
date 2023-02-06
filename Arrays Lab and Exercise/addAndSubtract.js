function addAndSubtract(arr) {
    let oldSum = 0;
    let newSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];
        oldSum += currNum;
        if (currNum % 2 === 0) {
            currNum += i;
            
        } else {
            currNum -= i;
        }
        arr[i] = currNum;
        newSum += currNum;
    }
    console.log(arr);
    console.log(oldSum);
    console.log(newSum);
}addAndSubtract([-5, 11, 3, 0, 2])