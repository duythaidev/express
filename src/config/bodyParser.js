import bodyParser from 'body-parser'
const useBodyParser = (app) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
}
export default useBodyParser