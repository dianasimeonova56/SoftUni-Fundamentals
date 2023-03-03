function piccolo(input) {
    //· Records a car number for every car that enters the parking lot
    let parking = new Set();

    for (let line of input) {
        let [command, number] = line.split(', ');

        if (command == "IN") {
            parking.add(number);
        } else {
            //· Removes a car number when the car goes out
            parking.delete(number);
        }
    }
    if (parking.size == 0) {
        console.log("Parking Lot is Empty");
    } else {
        //Print the output with all car numbers which are in the parking lot sorted in ascending by number.
        let result = Array.from(parking);

        result.sort();

        for (let car of result) {
            console.log(car);
        }
    }
    
} piccolo(['IN, CA2844AA',

    'IN, CA1234TA',

    'OUT, CA2844AA',

    'IN, CA9999TT',

    'IN, CA2866HI',

    'OUT, CA1234TA',

    'IN, CA2844AA',

    'OUT, CA2866HI',

    'IN, CA9876HH',

    'IN, CA2822UU'])