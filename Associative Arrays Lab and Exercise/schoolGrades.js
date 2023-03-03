function solve(input) {
    let result = new Map();

    for (let line of input) {
        let tokens = line.split(" ");
        let name = tokens.shift();
        let grades = tokens.map(Number);

        if (result.has(name) == false) {
            result.set(name, []);
        }

        let existing = result.get(name);
        for (let grade of grades) {
            existing.push(grade);
        }
    }
    let sorted = Array.from(result);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, grades] of sorted) {
        let average = 0;
        for (let grade of grades) {
            average += grade;
        }
        average /= grades.length;

        console.log(`${name}: ${average.toFixed(2)}`)
    }
}