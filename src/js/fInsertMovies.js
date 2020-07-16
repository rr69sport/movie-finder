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
            <button class="movie__button button button--call-to-action" data-id="show-info" data-imdbid="${movie.imdbID}">Información</button>
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
    movieInfo.classList.add('movies__info')

    movieInfo.innerHTML = `<div class="close">
                <button data-close="close" class="button button--close">X</button>
            </div>
            <picture class="movies__info--img">
                <img src="${movie.Poster}">
            </picture>
            <section class="movies__info--details">
                <h1 class="movies__info--title">${movie.Title}</h1>
                <p>Actors: ${movie.Actors}</p>
                <p>Writes: ${movie.Writer}</p>
                <p>Production: ${movie.Production}</p>
                <p>Director: ${movie.Director}</p>
                <p>Genre: ${movie.Genre}</p>
                <p>Language: ${movie.Language}</p>
                <p>Plot: ${movie.Plot}</p>
                <p>Runtime: ${movie.Runtime}</p>
                <p>Year: ${movie.Year}</p>
                <p>Ranking: ${movie.imdbRating}</p>
            </section>`
    fragment.appendChild(movieInfo)

    moviesSection.appendChild(fragment)
}