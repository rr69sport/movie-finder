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
    if (e.target.dataset.removecomponent === 'remove-component') {
        removeComponentsFrom('append-forms')
    }
})