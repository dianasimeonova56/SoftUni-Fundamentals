function solve(arr) {
    class Songs {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let num = arr.shift();
    let songs = [];
    let type = arr.pop();

    for (let i = 0; i < arr.length; i++) {
        let [typeList, name, time] = arr[i].split('_');
        let song = new Songs(typeList, name, time);
        songs.push(song);
    }
    if (type === "all") {
        songs.forEach((i) => console.log(i.name));
    } else {
        let filtered = songs.filter((i) => i.typeList === type);
        filtered.forEach((i) => console.log(i.name))
    }
}