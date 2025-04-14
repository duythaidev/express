import express from 'express'
import useViewEngine from './config/viewEngine'
import useRoutes from './routes/web'
import useApiRoutes from './routes/api'
import connectDB from './config/connectDB'
import fixCors from './config/cors'
import bodyParser from 'body-parser'
import useBodyParser from './config/bodyParser'
import cookieParser from 'cookie-parser'

require('dotenv') // get data from env

const app = express()
const PORT = process.env.PORT || 8080


useBodyParser(app)
useViewEngine(app)

fixCors(app)
app.use(cookieParser())


useRoutes(app)
useApiRoutes(app)

connectDB()

// app.listen = run app
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})