document.addEventListener('DOMContentLoaded', () => {

    // Si sessionStorage retorna null
    // muestra un msj de aviso
    if (!currentUserLoggedIn()) {
        insertTemplate('messages-template', 'append-forms', true)

        insertTemplate('login-and-register-template', 'account')

    } else {

        getUserLogin(getCurrentUser())
    }

})

account.addEventListener('click', (e) => {

    // LOGIN
    if (e.target.id === 'login-button') {

        insertTemplate('login-form-template', 'append-forms', true)

    }

    // SING IN
    if (e.target.id === 'register-button') {

        insertTemplate('sing-in-template', 'append-forms', true)

    }

    // FAVORITES
    if (e.target.id === 'favorites-button') {

        favorites.classList.toggle('favorites__right')
    }

    // LOGOUT
    if (e.target.id === 'logout-button') {

        singOff()

        removeTemplate('append-forms')

        removeTemplate('movies')

        replaceClass('append-forms', 'forms__modal--search', 'forms__modal--account')

        insertTemplate('login-and-register-template', 'account', true)
    }
})

appendForms.addEventListener('submit', (e) => {

    e.preventDefault()

    // Login Form
    if (e.target.id === 'login-form') {

        const loginName = document.getElementById('login-name');
        const loginPass = document.getElementById('login-pass');

        const name = loginName.value.trim()
        const pass = loginPass.value.trim()

        if (name !== '' && pass !== '') {

            const user = {
                id: `${name}${pass}`
            }

            getUserLogin(user.id)

        } else {
            if (name == '') {

                alertEmptyField(loginName, 'alert', time)
                changePlaceholderValue(loginName, 'Ingresa un usuario', 'Usuario', time)
            }
            if (pass == '') {

                alertEmptyField(loginPass, 'alert', time)
                changePlaceholderValue(loginPass, 'Ingresa una contraseña', 'Contraseña', time)
            }
        }
    }

    // Create account
    if (e.target.id === 'sing-in-form') {

        const getName = document.getElementById('sing-in-name')
        const getPass = document.getElementById('sing-in-pass')
        const getRPass = document.getElementById('repeat-pass')

        const name = getName.value.trim()
        const pass = getPass.value.trim()
        const rPass = getRPass.value.trim()

        if (name !== '' &&
            pass !== '' &&
            rPass !== '') {

            if (pass === rPass) {

                const user = {
                    id: `${name}${pass}`,
                    favoriteMovies: []
                }

                setNewUser(user)


            } else {

                alertEmptyField(getRPass, 'alert', time, true)

            }

        } else {
            if (getName.value.trim() == '') {

                alertEmptyField(getName, 'alert', time)

                changePlaceholderValue(getName, 'Ingresa un usuario', 'Usuario', time)
            }
            if (getPass.value.trim() == '') {

                alertEmptyField(getPass, 'alert', time)

                changePlaceholderValue(getPass, 'Ingresa una contraseña', 'Contraseña', time)
            }
            if (getRPass.value.trim() == '') {

                alertEmptyField(getRPass, 'alert', time)

                changePlaceholderValue(getRPass, 'Repite la contraseña', 'Repite la contraseña', time)
            }
        }
    }

    // Search form
    if (e.target.id === 'search-form') {
        const searchForm = document.getElementById('search-form');
        const search = document.getElementById('search');
        const movieTitle = search.value.trim().toLowerCase()

        if (movieTitle !== '') {

            searchMovies(movieTitle)

            searchForm.reset()

        }
    }
})

// Valida si las contraseñas son iguales
// Si lo son, agrega un color al outline del input correspondiente
appendForms.addEventListener('keyup', (e) => {

    if (e.target.id === 'sing-in-pass' ||
        e.target.id === 'repeat-pass') {

        const getPass = document.getElementById('sing-in-pass')
        const getRPass = document.getElementById('repeat-pass')

        const equalTo = getPass.value.trim()
        const Pass = getRPass.value.trim()

        if (equalTo !== '' && getRPass !== '') {

            if (Pass === equalTo) {

                getRPass.classList.add('equal-to')

            } else {

                getRPass.classList.remove('equal-to')

            }
        }
    }

})

// Escucha para el botón de cerrar de los formularios
appendForms.addEventListener('click', (e) => {
    if (e.target.dataset.close === 'close') {
        appendForms.textContent = ''
    }
})

// Evento para la sección favoritos
closeFavs.addEventListener('click', () => {

    favorites.classList.remove('favorites__right')
})

// Evento para detectar qué película 
// se quiere mostrar la información
moviesSection.addEventListener('click', (e) => {

    if (e.target.dataset.id === 'show-info') {

        console.log(e.target.dataset.imdbid);
    }

    if (e.target.dataset.close === 'close') {

        moviesSection.removeChild(e.target.parentElement.parentElement)
    }

    if (e.target.dataset.favorite === 'favorite' ||
        e.target.dataset.addfavorite === 'add-favorite') {

        console.log(e.target.dataset.imdbid);
    }
})