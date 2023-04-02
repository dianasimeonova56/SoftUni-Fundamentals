function followers(input) {
    let followers = {};
    let folCount = 0;

    while (input[0] != "Log out") {
        let tokens = input.shift().split(": ");
        let command = tokens[0];

        if (command === "New follower") {
            let name = tokens[1];
            if (!followers.hasOwnProperty(name)) {
                folCount++;
                followers[name] = {
                    likes: 0,
                    comments: 0,
                    sum: 0
                }

            } else {
                continue;
            }
        } else if (command === "Like") {
            let userName = tokens[1];
            let count = Number(tokens[2]);
            if (!followers.hasOwnProperty(userName)) {
                folCount++;
                followers[userName] = {
                    likes: count,
                    comments: 0
                }

            } else {
                followers[userName].likes += count;
            }
        } else if (command === "Comment") {
            let userName = tokens[1];
            if (!followers.hasOwnProperty(userName)) {
                folCount++;
                followers[userName] = {
                    likes: 0,
                    comments: 1
                }

            } else {
                followers[userName].comments += 1;
            }
        } else if (command === "Blocked") {
            let userName = tokens[1];
            if (followers.hasOwnProperty(userName)) {
                folCount--;
                delete followers[userName];

            } else {
                console.log(`${userName} doesn't exist.`)
            }
        }
    }
    for (let follower in followers) {
        let currSum = 0;
        currSum += followers[follower].likes + followers[follower].comments;
        followers[follower].sum = currSum;
    }
    console.log(`${folCount} followers`)
    for (let currFoll of Object.entries(followers)) {
        let user = currFoll[0];
        let data = currFoll[1];
        console.log(`${user}: ${data.sum}`)
    }
} followers((["New follower: George",
    "Like: George: 5",
    "New follower: George",
    "Log out"])

)