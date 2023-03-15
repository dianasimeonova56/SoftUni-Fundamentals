function matchFullName(input) {
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let validNames = [];
    let validName = null;
    while ((validName = pattern.exec(input)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '))
}