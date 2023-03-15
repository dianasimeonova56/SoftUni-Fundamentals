function matchDate(input) {
    let dates = input[0]
    let validDate = null;
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    
    while ((validDate = pattern.exec(dates)) !== null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    }
}