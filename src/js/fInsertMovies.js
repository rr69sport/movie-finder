const insertMovie = (movie) => {

    const movieElems = document.createElement('ARTICLE')
    movieElems.classList.add('movie')

    movieElems.innerHTML = `<button class="button movie__favorite" data-favoriteid="${movie.imdbID}">
            <img src="./assets/favorites/bookmark.svg" class="movie__favorite--svg" data-addfavorite="add-favorite">
        </button>
        <picture class="movie__poster">
            <img src="${movie.Poster}" class="poster">
        </picture>
        <div class="movie__info">
            <h2 class="movie__title">${movie.Title}</h2>
            <button class="movie__button button button--cta" data-id="show-info" data-imdbid="${movie.imdbID}">Información</button>
        </div>`
    fragment.appendChild(movieElems)
}

const insertMovies = (movies) => {

    movies.forEach(movie => {
        insertMovie(movie)
    });

    moviesSection.appendChild(fragment)
}

const insertInfo = (movie) => {

    const movieInfo = document.createElement('ARTICLE')
    movieInfo.classList.add('movie-info')

    movieInfo.innerHTML = `<div class="remove-component">
            <button data-removecomponent="remove-component"
                class="remove-component__trigger button button--secondary">X</button>
        </div>
            <picture class="movies-info__poster">
                <img src="${movie.Poster}">
            </picture>
            <section class="movies-info__details">
                <h1 class="movies-info__title">${movie.Title}</h1>
                <p>Actors: <span class="dark-color-lighten">${movie.Actors}</span></p>
                <p>Writes: <span class="dark-color-lighten">${movie.Writer}</span></p>
                <p>Production: <span class="dark-color-lighten">${movie.Production}</span></p>
                <p>Director: <span class="dark-color-lighten">${movie.Director}</span></p>
                <p>Genre: <span class="dark-color-lighten">${movie.Genre}</span></p>
                <p>Language: <span class="dark-color-lighten">${movie.Language}</span></p>
                <p>Plot: <span class="dark-color-lighten">${movie.Plot}</span></p>
                <p>Runtime: <time class="dark-color-lighten">${movie.Runtime}</time></p>
                <p>Year: <span class="dark-color-lighten">${movie.Year}</span></p>
                <p>Ranking: <span class="dark-color-lighten">${movie.imdbRating}</span></p>
            </section>`
    fragment.appendChild(movieInfo)

    moviesSection.appendChild(fragment)
}