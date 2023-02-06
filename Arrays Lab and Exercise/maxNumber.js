function maxNumber(arr) {
    let result = [];
        while(arr.length !== 0) {
            let [current, biggest] = [arr.shift(), Math.max(...arr)]
            if(current > biggest) result.push(current);
       }
       return result.join(' ');
    } maxNumber([1, 4, 3, 2])