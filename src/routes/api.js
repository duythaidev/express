import { express, Router } from 'express'
import { handleHomePage, handleHello, handleCreateUser, handleGetUser, handleGetUserPaginate } from '../controllers/homeController'
import { handleLogin, refreshLogin } from '../controllers/authController'
import { verifyToken } from '../services/JWTService';
const router = Router()

const Routes = (app) => {
    
    router.get('/', (req, res) => {
        res.send('hello')
    })
    router.get('/users', (req, res) => {
        res.send('hello')
    })
    router.post('/login', handleLogin)


    router.get('/users/:itemsPerPage/:page', handleGetUserPaginate)

    router.post('/users/create', handleCreateUser)

    // router.get('/', (req, res) => {
    //     console.log(req.cookies)
    //     return res.send({ a: 1 })
    // })
    return app.use('/api/v1/', router)
}
export default Routes