if (pathName === '/singin/') {

    console.log('Estás en la página de crear cuenta');

    const singInForm = document.getElementById('sing-in-form')
    const singInName = singInForm.singInName
    const singInPass = singInForm.singInPass
    const repeatPass = singInForm.repeatPass

    singInForm.addEventListener('submit', (e) => {
        e.preventDefault()
    })

    singInForm.addEventListener('keyup', () => {

        const equalTo = singInPass.value.trim()
        const rPass = repeatPass.value.trim()

        if (rPass === equalTo && equalTo !== '' && rPass !== '') {
            repeatPass.classList.add('equal-to')
        } else {
            repeatPass.classList.remove('equal-to')
        }
    })
}