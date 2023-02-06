function matrix(num) {
    for (let row = 1; row <= num; row++) {
        let result = " ";
        for (let column = 1; column <= num; column++){
            if (column === num) {
                result += num;
            } else {
                result += num +  " "; 
            }
        }
        console.log(result)
    }
} matrix(7);