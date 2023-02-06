function rounding(num1,num2) {
    if (num2 > 15) {
        num2 = 15;
    }
    console.log(`${parseFloat(num1.toFixed(num2))}`);
}