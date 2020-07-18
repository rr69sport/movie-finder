// Crea un elemento por cada resultado de búsqueda
const insertMovie = (movie) => {

    const movieElems = document.createElement('ARTICLE')
    movieElems.classList.add('movie')
    movieElems.dataset.id = movie.imdbID

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

// Inserta todoslos resultados de búsqueda al DOM
const insertMovies = (movies) => {

    movies.forEach(movie => {
        insertMovie(movie)
    });

    moviesSection.appendChild(fragment)
}

// Inserta los detalles de cada película al DOM
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
            <p>Actors: <span>${movie.Actors}</span></p>
            <p>Writes: <span>${movie.Writer}</span></p>
            <p>Production: <span>${movie.Production}</span></p>
            <p>Director: <span>${movie.Director}</span></p>
            <p>Genre: <span>${movie.Genre}</span></p>
            <p>Language: <span>${movie.Language}</span></p>
            <p>Plot: <span>${movie.Plot}</span></p>
            <p>Runtime: <time>${movie.Runtime}</time></p>
            <p>Year: <span>${movie.Year}</span></p>
            <p>Ranking: <span>${movie.imdbRating}</span></p>
        </section>`
    fragment.appendChild(movieInfo)

    moviesSection.appendChild(fragment)
}

// Crea un elemento por cada película favorita
const inserFavorite = (movie) => {

    const favMovie = document.createElement('ARTICLE')
    favMovie.classList.add('favorite')

    favMovie.innerHTML = `<div class="remove-component">
            <button data-imdbid="${movie.idMovie}" data-removecomponent="remove-component" class="remove-component__trigger button button--secondary">X</button>
        </div>
        <div class="favorite__info movie__info">
            <p class="${movie.title}">Avengers End Games</p>
            <button class="movie__button button button--cta" data-id="show-info" data-imdbid="${movie.idMovie}">Información</button>
        </div>
        <picture>
            <img src="${movie.poster}">
        </picture>`

    fragment.appendChild(favMovie)

}

const appendFavoritesMovies = (movies) => {

    favsMovies.textContent = ''

    movies.forEach(movie => {
        inserFavorite(movie)
    })

    favsMovies.appendChild(fragment)
}