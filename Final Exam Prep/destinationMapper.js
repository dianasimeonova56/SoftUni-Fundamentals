function destinationMapper(input) {
    let pattern = /(=|\/)[A-Z][A-Za-z]{2,}\1/gm;
    let matches = input.match(pattern);
    let destinations = [];
    let travelPoints = 0;

    if (matches != null) {
        for (let match of matches) {
            let destination = "";
            if (match.includes("=")) {
                destination = match.split('=')
            } else if (match.includes("/")) {
                destination = match.split('/')
            }
            destination = destination.filter(entry => entry);
            destination = destination[0].split('')
            travelPoints += destination.length;
            destinations.push(destination.join(''));
        }
    }
    
    console.log(`Destinations: ${destinations.join(', ')}`)
    console.log(`Travel Points: ${travelPoints}`)


}destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")