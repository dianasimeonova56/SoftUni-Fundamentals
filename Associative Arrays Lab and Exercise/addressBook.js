function addressBook(input) {
    let book = {};
    for (let line of input) {
        let [name, address] = line.split(':');
        book[name] = address;
    } 
    let sorted = Object.entries(book);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, address] of sorted) {
        console.log(name, "->", address)
    }
}addressBook(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'])