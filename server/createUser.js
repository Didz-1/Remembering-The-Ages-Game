const userList = require('./userList');
const gameList = require('./gameList');
const generateRandomString = require('./generateAuth')

const createUser = (body) => {
    const name = body.name;
    const level = body.level;
    let endAuthLoop = false;

    let auth;
    //check if auth alr exists

    while (!endAuthLoop) {
        auth = generateRandomString(6);
        const index = gameList.findIndex(obj => obj.auth == auth);
        
        if (index == -1) endAuthLoop = true; //end loop
    }
    const user = {name: name, level: level, auth: auth};
    userList.push(user);
    return user;
}
module.exports=createUser;