import { where } from 'sequelize';
import db from '../models/index'

const getAllUsers = async () => {
    // const data = await db.User.findOne({ where: { id: 1 } });

    // console.log(data.get({ plain: true }))
    // await db.User.drop()

    const users = await db.User.findAll({ attributes: ['id', 'userName', 'age'] });
    return users
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

export { getAllUsers, addUser }