if (pathName === '/login/') {

    console.log('Estás en la página de login');

    const loginForm = document.getElementById('login-form')
    const loginName = loginForm.loginName
    const loginPass = loginForm.loginPass

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()

        // const lName = loginName.value.trim()
        // const lPass = loginPass.value.trim()

    })

}

