// const button = document.getElementById('button');
const apikey = '8651a58e'
const link = `http://www.omdbapi.com/?apikey=${apikey}&s=avenger&plot=full`

// button.addEventListener('click', () => {
//     axios({
//         method: 'GET',
//         url: link
//     }).then(res => {
//         const movies = res.data.Search
//         movies.forEach(movie => {
//             console.log(movie.imdbID);
//         });
//     })
// })