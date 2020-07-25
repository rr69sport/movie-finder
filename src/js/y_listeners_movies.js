// Evento para detectar qué película
// se quiere mostrar la información
moviesSection.addEventListener('click', (e) => {

	if (e.target.dataset.id === 'show-info') {

		searchTitle(e.target.dataset.imdbid);
	}

	if (e.target.dataset.removecomponent === 'remove-component') {

		moviesSection.removeChild(e.target.parentElement.parentElement)
	}

	if (e.target.dataset.addfavorite === 'add-favorite') {

		getDataFavoriteMovie(e.target.parentElement.dataset.favoriteid);
	}
})
