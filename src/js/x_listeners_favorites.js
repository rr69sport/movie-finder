favorites.addEventListener('click', (e) => {

	// Saca del DOM el componente que muestra la información completa
	if (e.target.dataset.removecomponent === 'remove-component') {

		favsMovies.removeChild(e.target.parentElement.parentElement)

		updateFavoriteMovies({ idMovie: e.target.dataset.imdbid })

	}

	// Alterna una clase css para mostrar u ocultar la sección favoritos
	if (e.target.id === 'close-favorites') {

		favorites.classList.remove('favorites__active')
	}

	// Mustra la información completa desde la sección Favoritos
	if (e.target.dataset.id === 'show-info') {

		searchTitle(e.target.dataset.imdbid);
	}

})
