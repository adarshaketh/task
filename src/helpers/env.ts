import dotenv from 'dotenv';

dotenv.config();

function getJWTSecret():string{
    const secret = process.env.JWT_SECRET;
    if(!secret){
        console.log("JWT Secret is required in ENV")
        return ""
    }
    return secret;
}

function getMongoURI():string{
    const URI = process.env.MONGO_URI;
    if(!URI){
        console.log("MongoDB URI is required in ENV")
        return ""
    }
    return URI;
}

function getDBName():string{
    const dbName = process.env.DB_NAME;
    if(!dbName){
        console.log("DB Name is required in ENV")
        return ""
    }
    return dbName;
}

function getDEVPort():number{
    try{
        const port = process.env.DEV_PORT;
    if(!port){
        console.log("DEV PORT is required in ENV")
        return 0
    }
    return parseInt(port);
    }
    catch(error){
        return 0;
    }
}

function checkRequirments():boolean{
    if(!getJWTSecret()||!getMongoURI()||!getDEVPort()||!getDBName()){
        return true;
    }
    return false;
}

export {getJWTSecret, getDEVPort, getMongoURI, checkRequirments}