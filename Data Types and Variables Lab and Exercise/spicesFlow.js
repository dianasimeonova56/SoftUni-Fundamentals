function spicesFlow(yield) {
    let daysCounter = 0;
    let totalAmount = 0;
    
    while (yield >= 100) {
        totalAmount += (yield - 26);
        yield -= 10;
        daysCounter++;
    }
    totalAmount -= 26;
    if (totalAmount < 26) {
        totalAmount = 0;
    }
    
    console.log(`${daysCounter}`);
    console.log(`${totalAmount}`)
} spicesFlow(100)