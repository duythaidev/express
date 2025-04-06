import { express, Router } from 'express'
import { handleHomePage, handleHello, handleCreateUser } from '../controllers/homeController'
const router = Router()

const Routes = (app) => {

    //Khai báo các route: "/", "/hello"
    router.get('/', handleHomePage)
    router.get('/hello', handleHello)
    router.post('/user/create', handleCreateUser)

    return app.use('/', router) // Mọi url bắt đầu từ "/"
}
export default Routes