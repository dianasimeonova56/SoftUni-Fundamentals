function computerStore(input) {
    let totalPrice = 0;
    let totalPriceWithTaxes = 0;
    let taxes = 0;
    while (input[0] !== "regular" || input[0] !== "special") {
        if (input[0] == "regular" || input[0] == "special") {
            break;
        }
        let price = Number(input.shift());
        if (price < 0) {
            console.log("Invalid price!");
            continue;
        } else {
            totalPrice += price;
            taxes += price * 0.2;
        }
    }
    if (totalPrice === 0) {
        console.log("Invalid order!");
        return;
    } else {
        totalPriceWithTaxes += totalPrice + taxes;

        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`)
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log("-----------");
        if (input[0] === "special") {
            totalPriceWithTaxes -= totalPriceWithTaxes * 0.1;
            console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`)
        } else {
            console.log(`Total price: ${totalPriceWithTaxes.toFixed(2)}$`)
        }
    }
} computerStore([

    'regular'

])