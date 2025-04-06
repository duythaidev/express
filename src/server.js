import express from 'express'
import useViewEngine from './configs/viewEngine'
import useRoutes from './routes/web'

const app = express()

const PORT = 3000

useViewEngine(app)
useRoutes(app)

// app.listen = run app
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})