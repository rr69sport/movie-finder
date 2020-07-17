document.addEventListener('DOMContentLoaded', () => {

    // Si sessionStorage retorna null
    // muestra un msj de aviso
    if (!currentUserLoggedIn()) {
        insertTemplateInto('welcome-template', 'append-forms', true)

        insertTemplateInto('login-and-register-template', 'profile')

    } else {

        getUserLogin(getCurrentUser())
    }

})