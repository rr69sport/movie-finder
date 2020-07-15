const loSt = localStorage

// Verifica que el usuario exista o no
// Según si se loguea o registra
const ifUserExists = (userId) => {

    if (loSt.getItem('movie-finder-users') !== null) {
        const users = JSON.parse(loSt.getItem('movie-finder-users'))

        let exists = 0

        users.forEach(user => {
            if (user.id === userId) {
                exists = 1
            }
        })

        if (exists === 1) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }


}

// Guarda el usuario registrado
const setNewUser = (newUser) => {

    if (loSt.getItem('movie-finder-users') === null) {

        const registeredUsers = []

        registeredUsers.push(newUser)

        // Agrega el usuario actual sessionStorage
        setCurrentUser(newUser.id)

        loSt.setItem('movie-finder-users', JSON.stringify(registeredUsers))

    } else {

        const users = JSON.parse(loSt.getItem('movie-finder-users'))

        let exists = ifUserExists(newUser.id)

        if (exists) {

            createElemForAlert('p',
                `El usuario ${newUser.id} ya existe.`,
                ['alerts__alert', 'alert'],
                'alerts')

        } else {

            users.push(newUser)

            // Agrega el usuario actual sessionStorage
            setCurrentUser(newUser.id)

        }

        loSt.setItem('movie-finder-users', JSON.stringify(users))
    }
}

// Obtiene el usuario que se ha logueado
const getUserLogin = (userId) => {

    const exists = ifUserExists(userId)

    if (!exists) {
        createElemForAlert('p',
            `El usuario ${userId} no existe.`,
            ['alerts__alert', 'alert'],
            'alerts')

    } else {
        setCurrentUser(userId)
    }
}