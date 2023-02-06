function echo(params) {
    let dataType = typeof params
    console.log(dataType);
    
    if (dataType === "string" || dataType === "number") {
        console.log(`${params}`)
    } else {
        console.log('Parameter is not suitable for printing')
    }
} echo (18)