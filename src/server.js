import express from 'express'
import useViewEngine from './configs/viewEngine'
import useRoutes from './routes/web'

require('dotenv') // get data from env

const app = express()
const PORT = process.env.PORT || 8080

useViewEngine(app)

useRoutes(app)

// app.listen = run app
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})