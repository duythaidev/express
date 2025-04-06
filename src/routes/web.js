import { express, Router } from 'express'

const router = Router()

const useRoutes = (app) => {

    //Khai báo các route: "/", "/hello"
    router.get('/', (req, res) => {
        res.send('Get home page')
    })
    router.get('/hello', (req, res) => {
        res.send('Get hello message')
    })

    return app.use('/', router) // Mọi url bắt đầu từ "/"
}
export default useRoutes