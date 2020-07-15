const seSt = sessionStorage

const setCurrentUser = (userId) => {
    seSt.setItem('currentUser', JSON.stringify(userId))
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
}