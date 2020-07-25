const seSt = sessionStorage

// Si existe usuario en sessionStorage inserta el formulario de búsqueda y favoritos
const setCurrentUser = (userId) => {

	seSt.setItem('currentUser', JSON.stringify(userId))

	insertIfExistsUser()
}

// Retorna el item de sessionStorage
const getCurrentUser = () => {
	const currentUser = JSON.parse(seSt.getItem('currentUser'))
	return currentUser
}

// Si existe algo en sessionStorage retorna true, sino false
const currentUserLoggedIn = () => {
	if (seSt.getItem('currentUser') === null) {
		return false
	}
	return true
}

// Al cerrar sesión, remueve el item de sessionStorage
// Y quita la clase (Si la tiene) de la sección favoritos
const singOff = () => {

	seSt.removeItem('currentUser')

	if (favorites.classList.contains('favorites__active')) {

		favorites.classList.remove('favorites__active')

	}
}
