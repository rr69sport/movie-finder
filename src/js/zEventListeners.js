if (!currentUserLoggedIn()) {

    insertTemplate('login-and-register-template', 'account')

    const loginButton = document.getElementById('login-button');
    const singInButton = document.getElementById('sing-in-button');

    account.addEventListener('click', (e) => {

        // LOGIN
        if (e.target === loginButton) {

            // Inserta el template al html
            insertTemplate('login-template', 'append-forms', true)

            const loginForm = document.getElementById('login-form');

            loginForm.addEventListener('submit', (e) => {
                e.preventDefault()

                const name = loginForm.loginName.value.trim()
                const pass = loginForm.loginPass.value.trim()

                if (name !== '' && pass !== '') {

                    const user = {
                        id: `${name}${pass}`
                    }

                    setCurrentUser(user) //Session Storage

                    insertIfLoggedIn() // Search Form

                    getUser(user.id)

                } else {
                    if (name == '') {

                        alertEmptyField(loginForm.loginName, 'alert', time)
                        changePlaceholderValue(loginForm.loginName, 'Ingresa un usuario', 'Usuario', time)
                    }
                    if (pass == '') {

                        alertEmptyField(loginForm.loginPass, 'alert', time)
                        changePlaceholderValue(loginForm.loginPass, 'Ingresa una contraseña', 'Contraseña', time)
                    }
                }
            })

        }

        // SING IN
        if (e.target === singInButton) {

            // Inserta el template al html
            insertTemplate('sing-in-template', 'append-forms', true)

            const singInForm = document.getElementById('sing-in-form')

            const getName = singInForm.singInName
            const getPass = singInForm.singInPass
            const getRPass = singInForm.repeatPass

            singInForm.addEventListener('submit', (e) => {
                e.preventDefault()

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

                        setCurrentUser(user.id) //Session Storage

                        setNewUser(user) // Local Storage

                        insertIfLoggedIn() // Search Form

                    } else {

                        alertEmptyField(getRPass, 'alert', time, true)

                    }

                } else {
                    if (getName.value.trim() == '') {

                        alertEmptyField(singInForm.singInName, 'alert', time)

                        changePlaceholderValue(singInForm.singInName, 'Ingresa un usuario', 'Usuario', time)
                    }
                    if (getPass.value.trim() == '') {

                        alertEmptyField(singInForm.singInPass, 'alert', time)

                        changePlaceholderValue(singInForm.singInPass, 'Ingresa una contraseña', 'Contraseña', time)
                    }
                    if (getRPass.value.trim() == '') {

                        alertEmptyField(singInForm.repeatPass, 'alert', time)

                        changePlaceholderValue(singInForm.repeatPass, 'Repite la contraseña', 'Repite la contraseña', time)
                    }
                }
            })

            // Valida si las contraseñas son iguales
            // Si lo son, agrega un color al outline del input correspondiente
            singInForm.addEventListener('keyup', () => {

                const equalTo = getPass.value.trim()
                const Pass = getRPass.value.trim()

                if (equalTo !== '' && getRPass !== '') {

                    if (Pass === equalTo) {

                        getRPass.classList.add('equal-to')

                    } else {

                        getRPass.classList.remove('equal-to')

                    }
                }
            })
        }

    })

} else {

    insertIfLoggedIn() // Search Form

    const logoutButton = document.getElementById('logout-button');

    account.addEventListener('click', (e) => {
        if (e.target === logoutButton) {

            insertTemplate('login-and-register-template', 'account', true)

            singOff()

            currentUserLoggedIn()

            removeTemplate('append-forms')
        }
    })
}