import mysql from 'mysql2/promise';

const getAllUsers = async () => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'firstdb',
    });
    try {
        const [results, fields] = await connection.query(
            'SELECT * FROM `user` '
        );
        return results; // results contains rows returned by server
    } catch (err) {
        console.log(err);
    }
}

export { getAllUsers }