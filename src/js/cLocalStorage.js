const ls = localStorage

const setUser = (user) => {

    if (ls.getItem('users') === null) {

        const registeredUsers = []
        registeredUsers.push(user)
        ls.setItem('users', JSON.stringify(registeredUsers))

    } else {

        const users = JSON.parse(ls.getItem('users'))
        users.push(user)
        ls.setItem('users', JSON.stringify(users))
    }
}

const getUsers = () => {
    const users = JSON.parse(ls.getItem('users'))
    users.forEach(user => {
        console.log(user);
    });
}
