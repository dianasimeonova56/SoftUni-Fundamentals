function triangle(n) {
    
    for (let row = 1; row <= n; row++) {
        let result = '';
        for (let column = 0; column < row; column++) {
            result += row + ' '; 
        }
        console.log(result);
    }
}