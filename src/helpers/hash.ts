import bcrypt from "bcrypt";

const saltRounds = 10;

function genHash(password:string):string{
    return bcrypt.hashSync(password, saltRounds);
}

function checkHash(password:string,hash:string):boolean{
    return bcrypt.compareSync(password, hash);
}

export {genHash,checkHash}