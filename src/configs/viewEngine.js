import express from 'express'

const useViewEngine = (app) => {
    app.use(express.static('./src/public')) // Vị trí cho các file html css
    app.set('view engine', 'ejs') // Sử dụng ejs
    app.set('views', './src/views') // Vị trí folder chứa file ejs
}

export default useViewEngine