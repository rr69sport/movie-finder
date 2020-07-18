profile.addEventListener('click', (e) => {

    // LOGIN
    if (e.target.id === 'login-button') {

        insertTemplateInto('login-form-template', 'append-forms', true)

    }

    // SING IN
    if (e.target.id === 'register-button') {

        insertTemplateInto('sing-in-template', 'append-forms', true)

    }

    // FAVORITES
    if (e.target.id === 'favorites-button') {

        favorites.classList.toggle('favorites__active')
    }

    // LOGOUT
    if (e.target.id === 'logout-button') {

        singOff()

        removeComponentsFrom('append-forms')

        removeComponentsFrom('movies')

        replaceClass('append-forms', 'append-forms--search', 'append-forms--profile')

        insertTemplateInto('login-and-register-template', 'profile', true)
    }
})