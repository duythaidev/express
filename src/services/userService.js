import { where } from 'sequelize';
import db from '../models/index'

const getAllUsers = async () => {
    // const data = await db.User.findOne({ where: { id: 1 } });

    // console.log(data.get({ plain: true }))
    // await db.User.drop()

    const users = await db.User.findAll({
        // include: { model: db.Role, where: { id: 1 } },
    });
    console.log(users);

}

const addUser = async (userName) => {
    // try {
    //     await db.User.create({
    //         userName: 'asdjahd',
    //         age: 19
    //     })
    // } catch (error) {
    //     console.log(error)
    // }
    const data = await db.User.findOne({ where: { id: 1 } });

    console.log(data.get({ plain: true }))
}

export { getAllUsers, addUser }