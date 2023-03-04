function companyUsers(input) {
    let companies = new Map();

    for (let line of input) {
        let [company, employee] = line.split(" -> ");

        if (!companies.has(company)) {
            companies.set(company, new Set())
        }
        companies.get(company).add(employee)
        
    }
    let sorted = Array.from(companies);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));

    for (let [company, employees] of sorted) {
        console.log(company);
        for (let employee of employees) {
            console.log("--", employee)
        }
    }
} companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345' ])