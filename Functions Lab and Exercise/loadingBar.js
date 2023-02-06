function loadingBar(num) {
    let bar = "";
    let numForPercent = 0;
    let numForDots = 0;
    
    if (num != 100){
        numForPercent = num / 10;
        numForDots = 10 - numForPercent;
        for (let j = 1; j <= numForPercent; j++){
            bar += "%";
        }
        for (let i = 1; i <= numForDots; i++){
           bar += "."

         }
        console.log(`${num}% [${bar}]`);
        console.log("Still loading...")
    } else {
        console.log(`${num}% Complete!`);
    }
    
}loadingBar(100)