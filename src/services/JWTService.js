import { sign } from 'jsonwebtoken';
require('dotenv').config()

const createToken = (payloadData) => {
    const token = sign({ data: payloadData }, process.env.SECRET_KEY, { expiresIn: 1000 * 10000 });
    console.log(token)
    return token
}

const verifyToken = (token) => {
    let decodedData = null
    try {
        decodedData = jwt.verify(token, process.env.SECRET_KEY);
    } catch (err) {
        // err
        return decodedData
    }
    return decodedData
}


export { createToken, verifyToken }
