// const button = document.getElementById('button');
const apikey = '8651a58e'

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