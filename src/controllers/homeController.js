

// Xử lý req,res tại controller


const handleHomePage = async (req, res) => {

    return res.render('index.ejs')
}

const handleHello = (req, res) => {
    return res.send('Get hello page')
}
const handleCreateUser = (req, res) => {
    return res.send('Get hello page')
}



export { handleHomePage, handleHello, handleCreateUser }
