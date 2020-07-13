const loSt = localStorage

const setNewUser = (newUser) => {

    if (loSt.getItem('users') === null) {

        const registeredUsers = []
        registeredUsers.push(newUser)
        loSt.setItem('users', JSON.stringify(registeredUsers))

    } else {

        const users = JSON.parse(loSt.getItem('users'))
        users.push(newUser)
        loSt.setItem('users', JSON.stringify(users))
    }
}

const getUser = (userId) => {

    const users = JSON.parse(loSt.getItem('users'))

    users.forEach(user => {
        if (user.id === userId) {
            insertIfLoggedIn() // Search Form
        }
    });
}
