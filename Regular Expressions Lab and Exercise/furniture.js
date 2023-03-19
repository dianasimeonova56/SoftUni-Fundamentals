function furniture(input) {
    let totalMoney = 0;
    let index = 0;

    const pattern = /[>]{2}(?<name>[A-Za-z]+)[<]{2}(?<price>[\d]+[\.]*[\d]+)!(?<quantity>[\d]+)/g;
    console.log("Bought furniture:")
    while (input[index] != "Purchase") {
        let productRow = input[index];
        let validProduct = pattern.exec(productRow);
        while (validProduct !== null) {
            const name = validProduct.groups['name'];
            console.log(name);

            const price = validProduct.groups['price'];
            const quantity = validProduct.groups['quantity'];

            totalMoney += quantity * price;

            validProduct = pattern.exec(productRow);
        }
        index++;
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`)
    
}