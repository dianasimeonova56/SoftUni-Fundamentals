function pascalCaseSplitter(str) {
    let result = str[0];
    let lower = str.toLowerCase();

    for (let i = 1; i < str.length; i++) {
        if (str[i] !== lower[i]){
            result += ", "
        }
        result += str[i];
    }
    console.log(result);
}