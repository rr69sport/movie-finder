document.addEventListener('DOMContentLoaded', () => {

    insertTemplate('login-and-register-template', 'account')

    // Si sessionStorage retorna null
    // muestra un msj de aviso
    if (!currentUserLoggedIn()) {
        insertTemplate('messages-template', 'append-forms', true)
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

        console.log('Se desloqueó');

        removeTemplate('append-forms')

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

            // Agrega el usuario actual sessionStorage
            setCurrentUser(user.id)

            // Cambia el botón de acceder por
            // el de cerrar sesión y favoritos
            insertTemplate('logged-in-template', 'account', true)

            // Inserta el template de búsqueda
            insertTemplate('search-form-template', 'append-forms', true)

            // Reemplaza la clase del contenedor
            // del template de búsqueda 
            replaceClass('append-forms', 'forms__modal--account', 'forms__modal--search')

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

                // Agrega el usuario actual sessionStorage
                setCurrentUser(user.id)

                // Cambia el botón de acceder por
                // el de cerrar sesión y favoritos
                insertTemplate('logged-in-template', 'account', true)

                // Inserta el template de búsqueda
                insertTemplate('search-form-template', 'append-forms', true)

                // Reemplaza la clase del contenedor
                // del template de búsqueda 
                replaceClass('append-forms', 'forms__modal--account', 'forms__modal--search')


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

    if (e.target.id === 'search-form') {
        console.log('Está buscando');
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

// Escucha para el botón de cerrar
appendForms.addEventListener('click', (e) => {
    if (e.target.dataset.close === 'close') {
        appendForms.textContent = ''
    }
})

closeFavs.addEventListener('click', () => {
    favorites.classList.remove('favorites__right')
})