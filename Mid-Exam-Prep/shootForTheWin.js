function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(Number);
    let count = 0;;
    let print = "";

    // until "End"=>read index
    while (input[0] != "End") {
        let index = Number(input.shift());
        let value = targets[index];
        //shoot the target on index, if possible
        
        if (targets[index] != undefined) {
            //when shooting => value == -1, considered shot
            targets[index] = -1;
            count++;
            //reduce all other targets > current target with its value
            //increase all other targets < current target with its value
            //cant shoot, reduce or increase an already shot target
            for (let i = 0; i < targets.length; i++) {
                if (targets[i] == -1) {
                    continue;
                } else if (targets[i] > value) {
                    targets[i] -= value;
                } else if (targets[i] <= value) {
                    targets[i] += value;
                }
            }
        }
        else {
            continue;
        }
        //when we recieve "End" => print
        //"Shot targets: {count} -> {target1} {target2}… {targetn}"
    }
    
    if (input[0] == "End") {
        for (let i = 0; i < targets.length; i++) {
            print += targets[i]
        }
        console.log(`Shot targets: ${count} ->`, targets.join(' '))
        }

} shootForTheWin(["24 50 36 70",
"0",
"4",
"3",
"1",
"End"])



