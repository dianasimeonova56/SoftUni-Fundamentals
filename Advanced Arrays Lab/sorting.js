function sorting(arr) {
    let result =[];
    
    arr.sort((a, b)=> a - b);
    //[1, 2, 3, 18, 21, 31, 52, 63, 69, 94]
    while (arr.length !== 0){
        result.push(arr[arr.length - 1]) && arr.pop();
        result.push(arr[0]) && arr.shift();
    }
    console.log(result.join(' '))
} sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])