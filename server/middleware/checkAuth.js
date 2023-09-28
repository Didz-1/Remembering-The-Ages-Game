const userList = require('../userList');
const leaderboard = require('../leaderboard');

const checkAuth = (req, res, next) => {
    if (req.headers.authorisation){
        req.userObj = userList.find(user => user.auth == req.headers.authorisation);
    }
    next();
}

module.exports=checkAuth;