function meetings(input) {
    let allMeetings = {};
    for (let line of input) {
        let [day, name] = line.split(" ");

        if (allMeetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            allMeetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    } 
    for (let key in allMeetings) {
        console.log(`${key} -> ${allMeetings[key]}`)
    }

} meetings(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])