function maxSequence(arr) {
    let longestSeq = [];
    for (let i = 0; i < arr.length; i++) {
        let currElement = arr[i];
        let newArr = [currElement];
        for (let j = i + 1; j < arr.length; j++) {
            let currElement2 = arr[j];
            if (currElement === currElement2) {
                newArr.push(currElement2);
            } else {
                break;
            }
        }
        if (newArr.length > longestSeq.length) {
            longestSeq=newArr;
        }
    }
    console.log(longestSeq.join(" "))
    
}maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])