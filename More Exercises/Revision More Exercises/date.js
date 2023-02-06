function date(year, month, day) {
    let myDate = new Date(year, month - 1, day + 1);
    console.log(`${myDate.getFullYear()}-${myDate.getMonth() + 1}-${myDate.getDate()}`)
} date(2016, 9, 30)