 const getSaludo = (nombre) => {

    return `Hola ${nombre}`;
}


const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'Agosto1986'
    }
}

module.exports = {
    getSaludo,
    getUser,
}