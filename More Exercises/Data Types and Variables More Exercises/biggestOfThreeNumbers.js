function biggestOfThreeNumbers(n1, n2, n3) {
    let biggestNum = 0;
    if (n1 >= n2 && n1 >= n3) {
        biggestNum = n1;
    } else if (n2 >= n1 && n2 >= n3) {
        biggestNum = n2;
    } else if (n3 >= n1 && n3 >= n1) {
        biggestNum = n3;
    }
    console.log(biggestNum)
}