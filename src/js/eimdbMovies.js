// const button = document.getElementById('button');
const apikey = '8651a58e'

const searchMovies = (movie) => {

    const link = `https://www.omdbapi.com/?apikey=${apikey}&s=${movie}`

    axios({
        method: 'GET',
        url: link
    }).then(res => {
        if (res.data.Response === 'True') {

            removeTemplate('movies')
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
    const link = `https://www.omdbapi.com/?apikey=${apikey}&t=${movie}&plot=full`
    axios({
        method: 'GET',
        url: link
    }).then(res => {
        console.log(res);
    }).catch(err => {
        createElemForAlert('p',
            `${err} no se encontró`,
            ['alerts__alert', 'alert'],
            'alerts')
    })
}