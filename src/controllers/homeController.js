

// Xử lý req,res tại controller

import { addUser, getAllUsers } from "../services/userService"


const handleHomePage = async (req, res) => {
    // await addUser()
    return res.render('index.ejs')
}

const handleHello = async (req, res) => {
    return res.send('Get hello page')
}
const handleCreateUser = (req, res) => {
    return res.send('Get hello page')
}
const handleGetUser = async (req, res) => {
    try {
        const users = await getAllUsers()
        if (users !== null && users.length > 0) {
            return response(res, 200, 'User list', 0, users)
        }
        else {
            return response(res, 200, 'User list empty', 1, [])
        }
    } catch (error) {
        return response(res, 500, 'Database bug plz fix hmu hmu', -1, null)
    }
}

const response = (res, status, EM, EC, DT) => {
    return res.status(status).json({
        EM: EM ? EM : '',
        EC: EC !== null ? EC : -1,
        DT: DT ? DT : null
    });
}



export { handleHomePage, handleHello, handleCreateUser, handleGetUser }
