import db from '../models/index'

const getAllUsers = async () => {

}

const addUser = async (userName) => {
    try {
        await db.User.create({
            userName: 'asdjahd',
            age: 19
        })
    } catch (error) {
        console.log(error)
    }
}

export { getAllUsers, addUser }