// const button = document.getElementById('button');
const apikey = '8651a58e'

// Hace la petición con las películas que coincidan con la búsqueda
const searchMovies = (movie) => {

    const link = `https://www.omdbapi.com/?apikey=${apikey}&s=${movie}`

    axios({

        method: 'GET',
        url: link

    }).then(res => {

        if (res.data.Response === 'True') {

            removeComponentsFrom('movies')

            insertMovies(res.data.Search);

        } else {

            createElemForAlert('p',

                `Película no encontrada`,

                ['alerts__alert', 'alert'],

                'alerts')
        }

    }).catch(err => {

        createElemForAlert('p',

            `${err} no se encontró`,

            ['alerts__alert', 'alert'],

            'alerts')
    })
}

// Hace la petición con la película que el usuario quere ver más información
const searchTitle = (movie) => {

    const link = `https://www.omdbapi.com/?apikey=${apikey}&i=${movie}&plot=full`

    axios({

        method: 'GET',
        url: link

    }).then(res => {

        insertInfo(res.data);

    }).catch(err => {

        createElemForAlert('p',

            `${err} no se encontró`,

            ['alerts__alert', 'alert'],

            'alerts')
    })
}

// Cuando el usuario agrega a favoritos
// Hace la petición del id, del título y la ima´gen para añadirla a favoritos
const getDataFavoriteMovie = (movie) => {

    const link = `https://www.omdbapi.com/?apikey=${apikey}&i=${movie}`

    axios({

        method: 'GET',
        url: link

    }).then(res => {

        updateFavoriteMovies({
            idMovie: res.data.imdbID,
            title: res.data.Title,
            poster: res.data.Poster
        });

    }).catch(err => {

        createElemForAlert('p',

            `${err} no se encontró`,

            ['alerts__alert', 'alert'],

            'alerts')
    })
}