function gladiatorFights(lostFights, helmet, sword, shield, armor) {
   let helmetCounter = 0;
   let swordCounter = 0;
   let shieldCounter = 0;
   let armorCounnter = 0
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            helmetCounter++;
        }
         if (i % 3 == 0) {
            swordCounter++;
        }
        if (i % 2 == 0 && i % 3 == 0) {
            shieldCounter++;
            if (shieldCounter % 2 == 0) {
                armorCounnter++;
            }
        }
        
    }
    let expenses = helmetCounter *helmet + sword*swordCounter+armor*armorCounnter+shield*shieldCounter;
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`)
} gladiatorFights(7,

    2,
    
    3,
    
    4,
    
    5)