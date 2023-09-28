let userName;
let gameLevel=0;
let gameData;

const fetchUserDetails=async ()=>{
    const response = await get("http://localhost:3000/userDetails");
    userName = response.name;
    gameLevel = response.level;
    fetchGameDetails();
}

const fetchGameDetails=async ()=>{
    const response = await get(`http://localhost:3000/gameDetails/${gameLevel}`);
    gameData=response.data
    document.querySelector('#title').textContent=userName;
}
