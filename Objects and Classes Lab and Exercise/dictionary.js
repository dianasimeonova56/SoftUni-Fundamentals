function dictionary(arr) {
    let words = {};

    for (let el of arr) {
        let obj = JSON.parse(el);
        words = Object.assign(words, obj);
    }

    let sort = Object.keys(words);
    sort.sort((a,b) => a.localeCompare(b));

    for (let key of sort) {
        let value = words[key];
        console.log(`Term: ${key} => Definition: ${value}`);
    }

} dictionary([

    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of atropical shrub."}',
    
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ])