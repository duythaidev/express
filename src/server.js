import express from 'express'
import useViewEngine from './config/viewEngine'
import useRoutes from './routes/web'
import connectDB from './config/connectDB'

require('dotenv') // get data from env

const app = express()
const PORT = process.env.PORT || 8080

useViewEngine(app)

useRoutes(app)

connectDB()

// app.listen = run app
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})