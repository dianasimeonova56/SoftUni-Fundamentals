function oddOccurrencces(input) {
    //extract words from string input

    let words = input.split(' ');
    //create object to store each occurrence
    let obj = {};
    for (let word of words) {
        //make all words lowercase
        if (obj.hasOwnProperty(word.toLowerCase())) {
            obj[word.toLowerCase()]++;
        } else {
            obj[word.toLocaleLowerCase()] = 1;
        }
    }
    //print only odd occurrences
    let entries = Object.entries(obj);
    let result = [];
    for (let [key, value] of entries) {
        if (value % 2 == 1) {
            result.push(key.toLocaleLowerCase())
        }
    }
    console.log(result.sort().join(" "))
}
oddOccurrencces('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')