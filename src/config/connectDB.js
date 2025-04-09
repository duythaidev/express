import { Sequelize } from "sequelize";

const connectDB = async () => {
    const sequelize = new Sequelize('testdb', 'root', '123456', {
        host: 'localhost',
        dialect: "mysql",
        define: {
            freezeTableName: true, // Không thêm s vào table
        },
        logging: false,
    });
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
export default connectDB
