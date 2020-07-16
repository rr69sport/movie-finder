const createElem = (elem) => {

    const el = document.createElement(elem.toUpperCase())

    return el
}

const addContent = (elem, content) => {

    elem.textContent = content

    return elem
}

const addChildrens = (elem, childrens) => {

    childrens.forEach(child => {
        elem.appendChild(child)
    })

    return elem
}

const addDataAttr = (elem, dataAttr) => {

    for (const key in dataAttr) {
        if (dataAttr.hasOwnProperty(key)) {
            const attr = dataAttr[key];
            elem.setAttribute(`data-${key}`, attr)
        }
    }

    return elem
}

const addAttrs = (elem, attrs) => {

    for (const key in attrs) {
        if (attrs.hasOwnProperty(key)) {
            const attr = attrs[key];
            elem.setAttribute(key, attr)

        }
    }

    return elem
}


// Refactorizar urgente
const appendMovies = (movie) => {

    // Movie container
    const movieElem = createElem('div')
    addAttrs(movieElem, {
        class: 'movie'
    })

    // Favorite button
    const favoriteButton = createElem('button')
    addAttrs(favoriteButton, {
        class: 'button movie__favorite'
    })
    addDataAttr(favoriteButton, {
        favorite: 'favorite',
        favoriteId: movie.imdbID
    })

    // Favorite icon > child Favorite button
    const favoriteImg = createElem('img')
    addAttrs(favoriteImg, {
        src: './assets/favorites/bookmark.svg'
    })
    addDataAttr(favoriteImg, {
        addfavorite: 'add-favorite'
    })
    favoriteButton.appendChild(favoriteImg)


    // Poster movie
    const moviePoster = createElem('div')
    addAttrs(moviePoster, {
        class: 'movie__poster'
    })
    // Poster > child Poster movie
    const poster = createElem('img')
    addAttrs(poster, {
        src: movie.Poster,
        class: 'poster'
    })
    moviePoster.appendChild(poster)

    // Movie info
    const movieInfo = createElem('div')
    addAttrs(movieInfo, {
        class: 'movie__info'
    })
    // Title > child Movie info
    const movieTitle = createElem('h2')
    addAttrs(movieTitle, {
        class: 'movie__title'
    })
    addContent(movieTitle, movie.Title)

    // Show info > child Movie info
    const showInfoButton = createElem('button')
    addAttrs(showInfoButton, {
        class: 'button movie__favorite'
    })
    addAttrs(showInfoButton, {
        class: 'movie__button button button--call-to-action'
    })
    addDataAttr(showInfoButton, {
        id: 'show-info',
        imdbID: movie.imdbID
    })
    addContent(showInfoButton, 'Información')

    movieInfo.appendChild(movieTitle)
    movieInfo.appendChild(showInfoButton)

    movieElem.appendChild(favoriteButton)
    movieElem.appendChild(moviePoster)
    movieElem.appendChild(movieInfo)

    fragment.appendChild(movieElem)
}

const insertMovies = (movies) => {

    movies.forEach(movie => {
        appendMovies(movie)
    });

    moviesSection.appendChild(fragment)
}