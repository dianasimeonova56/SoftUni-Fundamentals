function orders(product, quantity) {
    let price = 0;
    if (product === "coffee") {
        price = 1.5 * quantity;
    } else if (product === "water") {
        price = 1.00 * quantity;
    } else if (product === "coke") {
        price = 1.4 * quantity;
    } else if (product === "snacks") {
        price = 2 * quantity;
    }
    console.log(`${price.toFixed(2)}`)
}