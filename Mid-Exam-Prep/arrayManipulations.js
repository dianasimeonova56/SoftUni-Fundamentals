function arrayManipulations(arr) {
    let nums = arr
        .shift()
        .split(' ')
        .map(Number);


    while (arr[0] != "end") {
        let tokens = arr
            .shift()
            .split(' ');
        let command = tokens[0];
        let index1 = Number(tokens[1]);
        let index2 = Number(tokens[2]);
        switch (command){
            case 'swap':
                let temp=(nums[index1]);
                nums[index1]=nums[index2];
                nums[index2]=temp;
                break;
            case 'multiply':
                nums[index1] *= nums[index2];
                break;
            case 'decrease':
                for (let i = 0; i < nums.length; i++) {
                    nums[i]--;
                }
                break;
        }

    }

    console.log(nums.join(', '));
}