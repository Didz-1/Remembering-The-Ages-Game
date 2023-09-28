authToken = window.location.search.split("=")[1];
const gameScore = {attempts:0,correct:0,posted:false}

document.querySelector('#start-game-button').addEventListener("click",event=>{
    startGame();
    document.querySelector('#start-game-h2').classList.add('hidden');
})
document.querySelector('#close-big-container-1').addEventListener("click",CloseBlock)
document.querySelector('#close-big-container-2').addEventListener("click",CloseBlock)
document.querySelector('#close-big-container-3').addEventListener("click",CloseBlock)

document.querySelector('#answer-0').addEventListener("click",CheckAnswer)
document.querySelector('#answer-1').addEventListener("click",CheckAnswer)
document.querySelector('#answer-2').addEventListener("click",CheckAnswer)
document.querySelector('#answer-3').addEventListener("click",CheckAnswer)

document.querySelector('#leaderboard').addEventListener("click",AddToLeaderboard)

fetchUserDetails();

