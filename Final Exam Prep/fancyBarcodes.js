function fancyBarcodes(input) {
    let n = Number(input.shift());
    let patternValidation = /@#+[A-Z]([A-Za-z0-9]{4,})[A-Z]@#+/;
    let patternDigits = /\d+/g;

    for (let i = 0; i < n; i++) {
        let isValid = patternValidation.test(input[i]);
        if (isValid) {
            let hasDigits = patternDigits.test(input[i]);
            if (hasDigits) {
                let matches = input[i].match(patternDigits);
                console.log('Product group:', matches.join(''));
            } else {
                console.log('Product group: 00');
            }
        } else {
            console.log('Invalid barcode')
        }
        
    }
    
} fancyBarcodes((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
)

