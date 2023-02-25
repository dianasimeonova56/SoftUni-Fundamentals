function movies(list) {
    let movies = [];
    list.forEach(line => {
        if (line.includes('addMovie ')) {
            let name = line.split('addMovie ')[1];
            movies.push({ name });
        } else if (line.includes('directedBy')) {
            let [name, director] = line.split(' directedBy ');
            let movie = movies.find(el => el.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (line.includes('onDate')) {
            let [name, date] = line.split(' onDate ');
            let movie = movies.find(el => el.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    });
    movies.forEach(movie => {
        if (movie.name && movie.date && movie.director) {
            console.log(JSON.stringify(movie));
        }
    });
}