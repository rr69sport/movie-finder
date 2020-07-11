const ls = localStorage

const setUser = (user) => {
    ls.setItem(user.id, JSON.stringify(user))
}

const getUsers = () => {
    if (ls.length !== 0) {
        for (const key in ls) {
            if (ls.hasOwnProperty(key)) {
                console.log(JSON.parse(ls.getItem(key)))
            }
        }
    } else {
        console.log('No hay usuarios registrados');
    }
}
