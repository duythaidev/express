import db from '../models/index'

const getAllUsers = async () => {
    const users = await db.User.findAll({
        attributes: ['id', 'userName', 'age'],
        include: {
            model: db.Role,
            attributes: ['id', 'roleName']
        }
    });
    return users
}


const loginService = async (userName, age) => {

}


const getAllUsersPaginate = async (itemPerPage, page) => {
    const users = await db.User.findAndCountAll({
        attributes: ['id', 'userName', 'age'],
        include: {
            model: db.Role,
            attributes: ['id', 'roleName']
        },
        limit: +itemPerPage,
        offset: (page - 1) * +itemPerPage,
    });
    return users
}
const getUserByUserName = async (userName) => {
    const user = await db.User.findOne({
        attributes: ['id', 'userName', 'age'],
        include: {
            model: db.Role,
            attributes: ['id', 'roleName']
        },
        where: {
            userName: userName,
        },
    });
    return user
}

const addUser = async (userName, age) => {
    // True if find, false if not find
    const user = await db.User.findOne({ where: { userName: userName } });
    if (user !== null) {
        return true
    }

    // Create user
    try {
        await db.User.create({ userName, age });
    } catch (error) {
        return true
    }
    return false
}

export { getAllUsers, addUser, getAllUsersPaginate, getUserByUserName }