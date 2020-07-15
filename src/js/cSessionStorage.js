const seSt = sessionStorage

const setCurrentUser = (userId) => {

    seSt.setItem('currentUser', JSON.stringify(userId))

    insertIfExistsUser()
}

const getCurrentUser = () => {
    const currentUser = JSON.parse(seSt.getItem('currentUser'))
    return currentUser
}

const currentUserLoggedIn = () => {
    if (seSt.getItem('currentUser') === null) {
        return false
    }
    return true
}

const singOff = () => {
    seSt.removeItem('currentUser')
    if (favorites.classList.contains('favorites__right')) {
        favorites.classList.remove('favorites__right')
    }
}