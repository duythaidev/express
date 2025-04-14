import { createToken, verifyToken } from "../services/JWTService"
import { getUserByUserName } from "../services/userService"


const authService = (req, res, next) => {
    // console.log(req)

    const nonSecurePaths = ['/api/v1/', '/api/v1/login'];
    if (nonSecurePaths.includes(req.path)) return next();
    if (!req.cookies || !req.cookies.access_token) {
        return response(res, 403, 'Not authorized', -1)
    }
    
    else if (req.cookies && req.cookies.access_token) {
        try {
            const decryptData = verifyToken(req.cookies.access_token)
            // console.log(decryptData)
            return next()
        } catch (error) {
            console.log(error)
            return response(res, 403, 'Not authorized', -1)
        }
    }

}


const handleLogin = async (req, res) => {
    const user = await getUserByUserName(req.body.userName)
    if (user) {
        if (user.age === +req.body.age) {

            const userData = {
                userName: user.userName,
                age: user.age,
                // roleId: 1
            }
            const token = createToken(userData)
            res.cookie('access_token', token, { maxAge: 30000, httpOnly: true, secure: true })

            return response(res, 200, 'Login successfully', 0, {
                id: user.id,
                userName: user.userName,
                age: user.age,
                roleId: user.Role ? user.Role.roleId : null,
            })
        }
    }
    return response(res, 401, 'Login failed', -1)
}

const response = (res, status, EM, EC, DT = null) => {
    return res.status(status).json({
        EM: EM ? EM : '',
        EC: EC !== null ? EC : -1,
        DT: DT ? DT : null
    });
}


export { handleLogin, authService }