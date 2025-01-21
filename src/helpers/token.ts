import token from 'jsonwebtoken';
import { getJWTSecret } from './env';


function generateToken(data:UserData):string{
    const jwtSecret = getJWTSecret()
    return token.sign({exp:Math.floor(Date.now() / 1000) + (60 * 60),data:data},jwtSecret) //token valid for 1hr 
}

function validateToken(jwt:string){
    const jwtSecret = getJWTSecret()
    return token.verify(jwt,jwtSecret)
}

export {generateToken,validateToken}