function mergeArrays(arr1, arr2) {
    let arr3 = [];

    for (let i = 0; i < arr1.length; i++) {
        let element1 = arr1[i];
        let element2 = arr2[i];
        let newElement = 0;
        if (i % 2 === 0 ) {
            element1 = Number(arr1[i]);
            element2 = Number(arr2[i]);
            newElement = element1 + element2;
        } else {
            newElement = element1 + element2;
        }
        arr3.push(newElement);
    }
    
    console.log(arr3.join(" - "))
} mergeArrays(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])