import { express, Router } from 'express'
import { handleHomePage, handleHello, handleCreateUser, handleGetUser, handleGetUserPaginate } from '../controllers/homeController'
const router = Router()

const Routes = (app) => {
    router.get('/', (req, res) => { return res.send('Backend') })
    router.get('/users', handleGetUser)
    router.get('/users/:itemsPerPage/:page',handleGetUserPaginate)

    router.post('/users/create', handleCreateUser)

    return app.use('/api/v1/', router)
}
export default Routes