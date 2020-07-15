const loSt = localStorage

// Guarda el usuario registrado
const setNewUser = (newUser) => {

    if (loSt.getItem('users') === null) {

        const registeredUsers = []
        registeredUsers.push(newUser)
        loSt.setItem('users', JSON.stringify(registeredUsers))

    } else {

        const users = JSON.parse(loSt.getItem('users'))

        let exists = ifUserExists(newUser.id)

        if (exists) {
            alert(`El usuario ${newUser.id} ya existe`)
        } else {
            users.push(newUser)
        }

        loSt.setItem('users', JSON.stringify(users))
    }
}

// Verifica que el usuario exista
const ifUserExists = (userId) => {

    const users = JSON.parse(loSt.getItem('users'))

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

}