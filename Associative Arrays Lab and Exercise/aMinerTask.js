function aMinerTask(input) {
    let result = new Map();
    for (let i = 0; i < input.length; i += 2) {
        let product = input[i];
        let qty = input[i+1];
        qty = Number(qty)
        if (!result.has(product)) {
            result.set(product, 0)
        }
        let existing = result.get(product);
        result.set(product, qty + existing);
    } 
    for (let [product, qty] of result){
        console.log(product, "->", qty)
    }
} aMinerTask([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ])