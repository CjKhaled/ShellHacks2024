const prisma = require('./prismaClient')

async function createNewUser(username, password) {
    try {
        const user = await prisma.user.create({
            data: {
                userName: username,
                password: password
            }
        })

        return user
    } catch (error) {
        throw error
    }
}

async function findUserById(id) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: id
            }
        })

        return user
    } catch (error) {
        throw error
    }
}

async function deleteUser(id) {
    try {
        const user = await prisma.user.delete({
            where: {
                id: id
            }
        })

        return user
    } catch (error) {
        throw error
    }
}

async function findUserByUsername(username) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                userName: username
            }
        })

        return user
    } catch (error) {
        throw error
    }
}


module.exports = {
    createNewUser,
    findUserById,
    deleteUser,
    findUserByUsername
}