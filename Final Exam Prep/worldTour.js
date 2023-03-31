function worldTour(input) {
    let stops = input.shift();

    while (input[0] != "Travel") {
        let tokens = input.shift().split(':')
        let command = tokens[0];
        let p1 = tokens[1];
        let p2 = tokens[2];

        if (command === "Add Stop") {
            stops = addStop(p1, p2, stops);
            console.log(stops);
        } else if (command === "Remove Stop") {
            stops = removeStop(p1, p2, stops);
            console.log(stops);
        } else if (command === "Switch") {
            stops = switchStops(p1, p2, stops);
            console.log(stops);
        }

    }
    console.log(`Ready for world tour! Planned stops: ${stops}`)

    function addStop(index, string, stops) {
        index = Number(index);
        if (index >= 0 && index <= stops.length) {
            let right = stops.slice(0, index);
            let left = stops.slice(index);
            let result = right + string + left;
            return result;
        } else {
            return stops;
        }
    }
    function removeStop(start, end, stops) {
        start = Number(start);
        end = Number(end);
        if (start >= 0 && start <= stops.length && end >= 0 && end < stops.length) {
            let right = stops.slice(0, start);
            let left = stops.slice(end+1);
            let result = right + left;
            return result;
        } else {
            return stops;
        }
    }
    function switchStops(oldStr, newStr, stops) {
        if (oldStr !== newStr && stops.includes(oldStr)) {
            stops = stops.replace(oldStr, newStr);
            return stops;
        } else {
            return stops;
        }
    }

} worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"])



)