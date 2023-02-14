function sortArrayTwoCriteria(arr) {
    let result = arr.sort((a, b)=>
    a.length - b.length || a.localeCompare(b));
    console.log(result.join('\n'))
}sortArrayTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])