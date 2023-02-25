function storeProvision(available, delivery) {
    const storedProduct = {};
    const availableLength = available.length;
    const deliveryLength = delivery.length;

    for (let i = 0; i < availableLength; i += 2) {
        const currentProduct = available[i];
        storedProduct[currentProduct] =  Number(available[i+1]);
    }
    for (let i = 0; i < deliveryLength; i += 2){
        const currentProduct = delivery[i];
        if (!storedProduct.hasOwnProperty(currentProduct)){
            storedProduct[currentProduct] = 0;
        }
        storedProduct[currentProduct] += Number(delivery[i+1]);
    }
    for (const product in storedProduct) {
        console.log(`${product} -> ${storedProduct[product]}`)
    }
}