function activationKeys(input) {
    let activationKey = input.shift();

    while (input[0] != "Generate") {
        let tokens = input.shift().split(">>>");
        let command = tokens[0];

        if (command === "Contains") {
            let substring = tokens[1];
            activationKey = Contains(substring, activationKey)
        } else if (command === "Flip") {
            let side = tokens[1];
            let startIndex = tokens[2];
            let endIndex = tokens[3];
            activationKey = Flip(startIndex, endIndex, side, activationKey)
        } else if (command === "Slice") {
            let startIndex = tokens[1];
            let endIndex = tokens[2];
            activationKey = Slice(startIndex, endIndex, activationKey);
        }

    }
    console.log(`Your activation key is: ${activationKey}`)
    function Contains(substring, activationKey) {
        if (activationKey.includes(substring)) {
            console.log(`${activationKey} contains ${substring}`)
            return activationKey;
        } else {
            console.log("Substring not found!")
            return activationKey;
        }
        
    }
    function Flip(start, end, side, activationKey) {
        let right = activationKey.slice(0, start);
        let substring = activationKey.slice(start, end);
        let left = activationKey.slice(end)
            if (side === "Upper") {
                substring = substring.toLocaleUpperCase();
            } else {
                substring = substring.toLocaleLowerCase();
            }
        let result = right + substring + left;
        console.log(result);
        return result;
    }
    function Slice(start, end, activationKey) {
        let right = activationKey.slice(0, start);
        let left = activationKey.slice(end);
        let result = right + left;
        console.log(result);

        return result;
    }
    
}activationKeys((["134softsf5ftuni2020rockz42",
"Slice>>>3>>>7",
"Contains>>>-rock",
"Contains>>>-uni-",
"Contains>>>-rocks",
"Flip>>>Upper>>>2>>>8",
"Flip>>>Lower>>>5>>>11",
"Generate"])

)