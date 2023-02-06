function formatGrade (grade) {
    let str = '';
    if (grade < 3){
        str = "Fail";
        console.log(`${str} (${grade})`)
    } else if (grade < 3.5){
        str = "Poor";
        console.log(`${str} (${grade.toFixed(2)})`)
    } else if (grade < 4.5) {
        str = "Good";
        console.log(`${str} (${grade.toFixed(2)})`)
    } else if (grade < 5.5){
        str = "Very good"
        console.log(`${str} (${grade.toFixed(2)})`)
    } else {
        str = "Excellent";
        console.log(`${str} (${grade.toFixed(2)})`)
    }
    
}