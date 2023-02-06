function condenseArrayToNumber(nums) {
    
    while (nums.length > 1) {
        let newArr = [];
        for (let i = 0; i < nums.length - 1; i++) {
            let firstElement = nums[i];
            let secondElement = nums[i + 1];

            newArr.push(firstElement + secondElement);
        }
        nums = newArr;
    }
    console.log(nums[0])
    
}condenseArrayToNumber([2,10,3])