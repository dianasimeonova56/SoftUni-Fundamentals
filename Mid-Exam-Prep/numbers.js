function numbers(input) {
    let nums = input.split(' ').map(Number);
    let avgNum = average(nums);
    let greaterNums = findGreaterThanAvg(nums, avgNum);
    if (greaterNums.length <= 0) {
        return;
    } else {
        let topNums = findTopNums(greaterNums);
        console.log(topNums.join(' '))
    }

    function average(nums) {
        let sum = 0;
        let count = 0;
        for (let num of nums) {
            count++;
            sum += num;
        }
        return avg = sum / count;

    }
    function findGreaterThanAvg(nums, avgNum) {
        let arr = [];
        let counter = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > avgNum) {
                counter++;
                arr.push(nums[i])
            }
        }
        if (arr.length <= 0) {
            console.log("No");
            return arr;
        }
        arr.push(counter);
        return arr;
    }
    function findTopNums(greaterNums) {
        if (greaterNums.length <= 0) {
            return;
        }

        let counter = greaterNums.pop();

        greaterNums.sort((a, b) => b - a);
        if (counter < 5) {
            return greaterNums.slice(0, counter)
        } else {
            return greaterNums.slice(0, 5);
        }
    }
} numbers('-1 -2 -3 -4 -5 -6')