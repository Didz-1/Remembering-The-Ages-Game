const fetchLeaderboardData=async()=>{
    const response = await get('http://localhost:3000/fetchLeaderboard');
    response.forEach(e => {
        console.log(e)
        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        tdName.textContent=e.user;
        const tdAttempts = document.createElement('td');
        tdAttempts.textContent=e.attempts;
        tr.appendChild(tdName);
        tr.appendChild(tdAttempts);
        document.querySelector("#leaderboard-table").appendChild(tr);
    });
}