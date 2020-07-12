account.addEventListener('click', (e) => {

    // LOGIN
    if (e.target === loginButton) {

        // Inserta el template al html
        insertForm('login-template', 'append-forms', true)

        const loginForm = document.getElementById('login-form');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault()

            const name = loginForm.loginName.value.trim()
            const pass = loginForm.loginPass.value.trim()

            if (name !== '' && pass !== '') {

                const user = {
                    id: `${name}${pass}`,
                    userName: name,
                    password: pass
                }

                setUser(user)

                loginForm.reset()

                isLogin = true

                redirect()

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
        insertForm('sing-in-template', 'append-forms', true)

        const singInForm = document.getElementById('sing-in-form')
        const name = singInForm.singInName
        const pass = singInForm.singInPass
        const rPass = singInForm.repeatPass

        singInForm.addEventListener('submit', (e) => {
            e.preventDefault()

            if (name.value.trim() !== '' &&
                pass.value.trim() !== '' &&
                rPass.value.trim() !== '') {

                if (pass.value.trim() === rPass.value.trim()) {

                    const user = {
                        // Pensé que no pero pasa la validación con .trim() teniendo espacios
                        // La pasa y agrega esos espacios a los valores
                        // Por eso se define aquí también .trim()
                        id: `${name.value.trim()}${pass.value.trim()}`,
                        favoriteMovies: []
                    }

                    setUser(user)

                    singInForm.reset()

                    rPass.classList.remove('equal-to')

                    isLogin = true

                    redirect()

                } else {

                    alertEmptyField(rPass, 'alert', time)
                }

            } else {
                if (name.value.trim() == '') {

                    alertEmptyField(name, 'alert', time)

                    changePlaceholderValue(name, 'Ingresa un usuario', 'Usuario', time)
                }
                if (pass.value.trim() == '') {

                    alertEmptyField(pass, 'alert', time)

                    changePlaceholderValue(pass, 'Ingresa una contraseña', 'Contraseña', time)
                }
                if (rPass.value.trim() == '') {

                    alertEmptyField(rPass, 'alert', time)

                    changePlaceholderValue(rPass, 'Repite la contraseña', 'Repite la contraseña', time)
                }
            }
        })

        // Valida si las contraseñas son iguales
        // Si lo son, agrega un color al outline del input correspondiente
        singInForm.addEventListener('keyup', () => {

            const equalTo = pass.value.trim()
            const Pass = rPass.value.trim()

            if (equalTo !== '' && rPass !== '') {

                if (Pass === equalTo) {

                    rPass.classList.add('equal-to')

                } else {

                    rPass.classList.remove('equal-to')

                }
            }
        })
    }

    // LOGOUT
    if (e.target === logoutButton) {

        isLogin = false

        redirect()
    }

    // DLETE ACCOUNT
    if (e.target === deleteAccount) {

    }
})