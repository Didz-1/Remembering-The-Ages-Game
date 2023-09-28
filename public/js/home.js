let gamesList=[];

const selectLevel = (event) => {
    if(event.target.dataset.active==="true") return
    document.querySelectorAll(".level-button").forEach(btn=>{
        if(btn.dataset.active==="true")btn.dataset.active = "false";
    })
    event.target.dataset.active = "true"
}

const startGame = async (event) => {
    event.preventDefault();
    const index = [...document.querySelectorAll(".level-button")].findIndex(btn=>btn.dataset.active==="true")
    const input = document.querySelector("input[type=text]")
    const name = (input.value == "")?"anonymous":input.value
    if(event.target.id==="singlePlayer"){
        let response = await post("http://localhost:3000/createSingleGame",{name:name,level:index});
        window.open(`game.html?auth=${response.data.auth}`,'_self');
    }
    else {
        let response = await post("http://localhost:3000/createTwoPlayerGame",{name:name,level:index});
        authToken=response.data.auth;
        console.log(authToken);
        console.log(response);
        document.querySelector('#dialog-title').textContent="Waiting for another person to join";
        document.querySelector('#exit-game-button').classList.remove('hidden');
        document.querySelector('#exit-game-button').classList.remove('hidden');
        document.querySelector('#gamesList').classList.add('hidden');
        document.querySelector('#dialog-show').classList.remove('hidden');
        listen(updateGameStatus);
    }
}

const deleteGame= async event=>{
    if(!confirm('Do you want to delete your current game?'))return;
    stopListening();
    let response = await del("http://localhost:3000/deleteGame/");
    if(response.ok)alert("Game deleted")
    else alert(response.message);
    document.querySelector('#exit-game-button').classList.add('hidden');
    document.querySelector('#dialog-show').classList.add('hidden');
}

const joinGame= async event=>{
    event.preventDefault();
    let response = await get("http://localhost:3000/gameList/");
    gamesList = response;
    if(gamesList.length==0)return alert("There are no current games to join");
    const elem = document.querySelector('#gamesList');
    document.querySelector('#dialog-title').textContent="Games Lobby";
    document.querySelector('#exit-lobby-button').classList.remove('hidden');
    document.querySelector('#dialog-show').classList.remove('hidden');
    while(response.length>0){
        const game = response.shift();
        const para = document.createElement('p');
        para.textContent=`Host: ${game.host} `;
        para.id=`game-${game.id}`;
        para.addEventListener("click",SelectGameToJoin)
        elem.appendChild(para);
    }
}

const SelectGameToJoin=async (event)=>{
    const index = [...document.querySelectorAll(".level-button")].findIndex(btn=>btn.dataset.active==="true")
    const input = document.querySelector("input[type=text]");
    const name = (input.value == "")?"anonymous":input.value
    let response = await post("http://localhost:3000/joinGame/",{level:index,name:name,gameId:event.target.id.split("-")[1]});
    if(response.ok)window.open(`twoplayergame.html?auth=${response.data.auth}`,'_self');
}

const updateGameStatus=(messages)=>{
    stopListening();
    window.open(`twoplayergame.html?auth=${authToken}`,'_self');
}

const exitLobby = (event)=>{
    document.querySelector('#exit-lobby-button').classList.add('hidden');
    document.querySelector('#dialog-show').classList.add('hidden');
}

const checkLeaderboard = event=>{
    event.preventDefault();
    window.open(`leaderboard.html`,'_self');
}

document.querySelectorAll('.level-button').forEach(btn=>{
    btn.addEventListener("click",selectLevel)
});

document.querySelector('#singlePlayer').addEventListener("click",startGame);
document.querySelector('#twoPlayer').addEventListener("click",startGame);

document.querySelector('#exit-game-button').addEventListener("click",deleteGame);

document.querySelector('#exit-lobby-button').addEventListener("click",exitLobby);

document.querySelector('#join-game').addEventListener("click",joinGame);

document.querySelector('#check-leaderboard').addEventListener("click",checkLeaderboard);