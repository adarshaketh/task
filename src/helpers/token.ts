import token from 'jsonwebtoken';
import dotenv from 'dotenv';
import { getJWTSecret } from './env';

dotenv.config();

function generateToken(data:UserData):string{
    const jwtSecret = getJWTSecret()
    return token.sign({exp:Math.floor(Date.now() / 1000) + (60 * 60),data:data},jwtSecret)
}

function validateToken(jwt:string){
    const jwtSecret = getJWTSecret()
    return token.verify(jwt,jwtSecret)
}

export {generateToken,validateToken}