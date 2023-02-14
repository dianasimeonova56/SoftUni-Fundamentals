function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let rooms = input.split('|');

    for (let i = 0; i < rooms.length; i++) {
        let currRoom = rooms[i].split(' ')
        let command = currRoom[0];
        let value = Number(currRoom[1]);

        if (command == 'potion') {
            health += value;
            if (health < 100) {
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${health} hp.`)
            } else {
                let excess = health - 100;
                value -= excess;
                health -= excess;
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${health} hp.`)
            }
        } else if (command == 'chest') {
            bitcoins += value;
            console.log(`You found ${value} bitcoins.`);
        } else {
            health -= value;
            if (health > 0) {
                
                console.log(`You slayed ${command}.`)
            } else {
                console.log(`You died! Killed by ${command}.`)
                console.log(`Best room: ${i + 1}`)
                return;
            }
        }
    }
    if (health > 0) {
        console.log("You've made it!");
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`)
    }

}