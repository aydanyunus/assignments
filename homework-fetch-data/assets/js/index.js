const content = document.querySelector('#content');

function getData() {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://ajax.test-danit.com/api/swapi/films', true)
    xhr.onload = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            let movies = JSON.parse(this.response);
            renderMovieData(movies)
        }
    }
    xhr.send()

}

function renderMovieData(movies) {
    movies.forEach(movie => {

        let movieWrapper = document.createElement('div');
        movieWrapper.classList.add('movie-wrapper');

        let classNames = ['movie-title', 'movie-episode', 'movie-opening-crawl']


        classNames.forEach((classname) => {
            let div = document.createElement('div');
            div.classList.add(classname);
            if (classname === 'movie-title') {
                div.textContent = `Movie Name: ${movie.name}`
            } else if (classname === 'movie-episode') {
                div.textContent = `Episode: ${movie.episodeId}`
            } else if (classname === 'movie-opening-crawl') {
                div.textContent = `Opening Crawl: ${movie.openingCrawl}`
            }
            movieWrapper.appendChild(div);
        });

        content.appendChild(movieWrapper);


        // loader animation
        let loader = document.createElement('div');
        loader.classList.add('loader')
        loader.style.display = 'block';
        movieWrapper.appendChild(loader)


        // get characters
        getCharacters(movie.characters)
            .then((characters) => {
                loader.style.display = 'none';
                let movieCharElem = document.createElement('div');
                movieCharElem.classList.add('movie-characters')
                movieCharElem.textContent = `Characters: ${characters.join(", ")}`
                movieWrapper.appendChild(movieCharElem);
            })
            .catch((error) => {
                console.log(error);
            });

    });
}

function getCharacters(movieCharacters) {
    const characterPromises = movieCharacters.map((characterUrl) =>
        fetch(characterUrl)
            .then((res) => res.json())
            .then((data) => {
                return data.name;
            })
    );
    return Promise.all(characterPromises)

}



getData()