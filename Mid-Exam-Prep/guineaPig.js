function guineaPig(input) {
    let food = (Number(input[0]))*1000;
    let hay = (Number(input[1]))*1000;
    let cover = (Number(input[2]))*1000;
    let weight = (Number(input[3]))*1000;
    let day = 0;
    
    while (day < 30){
        day++;
        food -= 300;
        if (day % 2 == 0){
            hay -= (food * 0.05);
        }
        if (day % 3 == 0) {
            cover -= weight * 1/3;
        }
        if (food < 0 || hay < 0 || cover < 0){
            console.log("Merry must go to the pet store!");
            return;
        }
    }
    if (food > 0 && hay > 0 && cover > 0) {
        let excessFood = food / 1000;
        let excessHay = hay / 1000;
        let excessCover = cover / 1000;
        console.log(`Everything is fine! Puppy is happy! Food: ${excessFood.toFixed(2)}, Hay: ${excessHay.toFixed(2)}, Cover: ${excessCover.toFixed(2)}.`)
    } else {
        console.log("Merry must go to the pet store!");
    }


}