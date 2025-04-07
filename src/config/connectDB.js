import { Sequelize } from "sequelize";

const connectDB = async () => {
    const sequelize = new Sequelize('firstdb', 'root', '', {
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
