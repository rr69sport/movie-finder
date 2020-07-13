// if (!currentUserLoggedIn()) {
insertTemplate('login-and-register-template', 'account')

account.addEventListener('click', (e) => {

    // LOGIN
    if (e.target.id === 'login-button') {

        // Inserta el template al html
        insertTemplate('login-form-template', 'append-forms', true)

        const loginForm = document.getElementById('login-form');

        loginForm.addEventListener('submit', (e) => {
            e.preventDefault()

            const name = loginForm.loginName.value.trim()
            const pass = loginForm.loginPass.value.trim()

            if (name !== '' && pass !== '') {

                const user = {
                    id: `${name}${pass}`,
                    name: name,
                    favorites: []
                }

                setNewUser(user)

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

    if (e.target.id === 'favorites-button') {
        console.log('Clickeó favoritos');
    }

    if (e.target.id === 'logout-button') {
        console.log('Se desloqueó');
    }
})