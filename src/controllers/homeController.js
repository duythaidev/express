

// Xử lý req,res tại controller

import { addUser, getAllUsers } from "../services/userService"


const handleHomePage = async (req, res) => {
    await addUser()
    return res.render('index.ejs')
}

const handleHello = async (req, res) => {
    await getAllUsers()
    return res.send('Get hello page')
}
const handleCreateUser = (req, res) => {
    return res.send('Get hello page')
}



export { handleHomePage, handleHello, handleCreateUser }
