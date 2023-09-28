require("dotenv").config();
const gameList = require("./gameList");
const userList = require("./userList");
let leaderboard = require("./leaderboard");
const createUser = require('./createUser');
let messageList = require("./messageList");
const gameData = require("./gameData");
const generateRandomString = require("./generateAuth");
const checkAuth = require('./middleware/checkAuth');
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

let gameID = 0;

app.use(cors());
app.use(express.json());
app.use(checkAuth);

app.get("/userDetails",(req,res)=>{
    if(req.userObj) res.send(req.userObj)
    else res.send({ok:false})
});

app.get("/gameDetails/:level",(req,res)=>{
    const level = parseInt(req.params.level);
    if(req.userObj){
        res.send({ok:true,data:gameData});
    }
    else res.send({ok:false})
});

app.get("/fetchLeaderboard",(req,res)=>{
    res.send(leaderboard)
});

app.get('/gameList', (req, res) => {
    res.send(gameList);
});

app.get('/userList', (req, res) => {
    res.send(userList);
});

app.get('/messageList', (req, res) => {
    res.send(messageList);
});

app.get('/getMessages', (req, res) => {
    const list = messageList.filter(message=>message.to===req.userObj.auth);
    messageList = messageList.filter(message=>message.to!==req.userObj.auth);
    res.send(list);
});

app.post("/createSingleGame", (req, res) => {
    const user = createUser(req.body);
    res.status(201);
    res.send({auth:user.auth});
});

app.post("/createTwoPlayerGame", (req, res) => {
    const user = createUser(req.body);
    const game = {host:user.name,auth:user.auth,oppo:"",active:false,id:gameID++}
    gameList.push(game);
    res.status(201).send({auth:user.auth});
})

app.post('/joinGame',(req,res)=>{
    const user = createUser(req.body);
    const game = gameList.find(game=>game.id===parseInt(req.body.gameId));
    game.oppo = user.auth;
    messageList.push({text:"joined",from:user.auth,to:game.auth})
    res.status(201).send({ok:true,auth:user.auth});
})

app.post('/sendMessage',(req,res)=>{
    messageList.push(req.body);
    res.status(201).send(req.body);
})

app.post('/addscores',(req,res)=>{
    const name = req.body.name;
    const attempts = parseInt(req.body.attempts);
    leaderboard.push({user:name,attempts:attempts});
    if(leaderboard.length>1)leaderboard = leaderboard.sort((a,b)=>(a.attempts>=b.attempts)?1:-1);
    res.status(201).send({ok:true,message:"Posted scores"});
})

app.delete('/deleteGame', (req, res) => { 
    const index = gameList.findIndex(obj => obj.auth === req.userObj.auth);
    if (index !== -1) {
        gameList.splice(index, 1);
        res.sendStatus(201);
    } else {
        res.status(404).send("Game not found!");
    }
});

app.listen(port, () => {
    console.log(`Server is now listening on port ${port}`);
});