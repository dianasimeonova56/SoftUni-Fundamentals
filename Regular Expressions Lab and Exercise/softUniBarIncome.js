function softUniBarIncome(customerArray) {
    const pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9|\.]+)\$/g;

    let totalIncome = 0;
    let command = customerArray.shift();

    while(command !== "end of shift") {
        let currData = pattern.exec(command);

        if (currData) {
            let currCustomer = currData.groups['customer'];
            let currProduct = currData.groups['product'];
            let currCount = Number(currData.groups['count']);
            let currPrice = Number(currData.groups['price']);

            let totalProductPrice = currCount * currPrice;
            console.log(`${currCustomer}: ${currProduct} - ${totalProductPrice.toFixed(2)}`);
            totalIncome += totalProductPrice;

            command = customerArray.shift();
            currData = pattern.exec(command)
        } else {
            command = customerArray.shift();
        }

       
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}