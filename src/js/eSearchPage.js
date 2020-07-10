if (pathName === '/search/') {
    if (login) {
        const logout = document.getElementById('logout');
        logout.addEventListener('click', () => {
            login = false
        })
    } else {
        window.location.href = '/'
    }
}