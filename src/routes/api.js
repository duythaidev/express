import { express, Router } from 'express'
import { handleHomePage, handleHello, handleCreateUser, handleGetUser, handleGetUserPaginate } from '../controllers/homeController'
import { authService, handleLogin } from '../controllers/authController'
import { verifyToken } from '../services/JWTService';
const router = Router()

const Routes = (app) => {

    app.all('/{*any}', authService)
    router.post('/login', handleLogin)

    router.get('/users', handleGetUser)
    router.get('/users/:itemsPerPage/:page', handleGetUserPaginate)

    router.post('/users/create', handleCreateUser)

    // router.get('/', (req, res) => {
    //     console.log(req.cookies)
    //     return res.send({ a: 1 })
    // })
    return app.use('/api/v1/', router)
}
export default Routes