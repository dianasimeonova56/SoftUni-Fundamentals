function city(cityInfo) {
    let entries = Object.entries(cityInfo);
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}