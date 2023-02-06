function repeatStr(str, n) {
    let newStr = "";
    for (let i = 1; i <= n; i++) {
        newStr += str;
    }
    return newStr;
}
let str2 = repeatStr("abc", 3)
console.log(str2)