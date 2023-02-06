function magicSum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            let nextElement = arr[j];
            let sum = element + nextElement;
            if (sum === num) {
                console.log(`${element} ${nextElement}`);
            } else {
                sum = 0;
            }
        }
    }
} magicSum([14, 20, 60, 13, 7, 19, 8],

    27)
