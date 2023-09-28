let cardsFlipped=[];
let cardFlipBlock=false;

const startGame = ()=>{
    createCardGrid();
}

const createCardGrid=()=>{
    const section = document.querySelector('#card-container');
//    let x=1;
//    let y=1;
    gameData.forEach((data,i)=>{
//        console.log(x,y,data);
        const card=document.createElement('div');
        card.classList.add('small-card');
//        card.style.cssText=`grid-area:${y}/${x}/${y+1}/${x+1}`;
        section.appendChild(card);
//        x++;
//        if(x==6){
//            x=0;
//            y++;
//        }
        const cardInside = document.createElement('div');
        cardInside.id=`card-${i}`;
        cardInside.dataset.stop='0';
        cardInside.classList.add('small-card-inside');
        card.appendChild(cardInside);
        const backCard = document.createElement('div');
        backCard.classList.add('small-card-back');
        backCard.id=`backcard-${i}`;
        cardInside.appendChild(backCard);
        const frontCard = document.createElement('div');
        frontCard.id=`frontcard-${i}`;
        frontCard.classList.add('small-card-front');
        frontCard.classList.add(`${data.img}`);
        cardInside.appendChild(frontCard);
        card.addEventListener("click",flippedCard);
    })
}

const flippedCard=event=>{
    const id = parseInt(event.target.id.split('-')[1]);
    const cardInside = document.querySelector(`#card-${id}`)
    if(cardFlipBlock || cardInside.dataset.stop==="1" || (cardsFlipped[0] && cardsFlipped[0].id===cardInside.id))return;
    cardInside.classList.add('flip-card');
    cardsFlipped.push(cardInside);
    if(cardsFlipped.length==2){
        cardFlipBlock=true;
        const id1 = parseInt(cardsFlipped[0].id.split('-')[1]);
        const id2 = parseInt(cardsFlipped[1].id.split('-')[1]);
        OpenBlock(id1,id2);
        AddDataToCard(id1,"big-left");
        AddDataToCard(id2,"big-right");
        setTimeout(()=>{
            document.querySelector('#big-container').classList.remove('hidden');
            document.querySelector('#big-card-left').classList.add('big-card-in-left');
            document.querySelector('#big-card-right').classList.add('big-card-in-right');
            document.querySelector('#show-questions').classList.add('question-block-in');
        },1500)
    }
}

const AddDataToCard=(id,elem)=>{
    document.querySelector(`#${elem}-img`).classList.add(gameData[id].img);
    document.querySelector(`#${elem}-title`).textContent=gameData[id].title;
    document.querySelector(`#${elem}-legend`).textContent=gameData[id].legend;
}

const OpenBlock=(id1,id2)=>{
    if(gameData[id1].id!==gameData[id2].link)document.querySelector('#no-question-block').classList.remove('hidden')
    else{
        document.querySelector('#question').textContent=gameData[id1].question;
        gameData[id1].answers.forEach((a,i)=>{
            const elem=document.querySelector(`#answer-${i}`);
            elem.textContent=a.answer;
            if(a.correct)elem.dataset.a="1";
            else elem.dataset.a="0";
        })
        document.querySelector('#question-block').classList.remove('hidden');
    }
}

const CloseBlock=event=>{
    document.querySelector('#big-card-left').classList.remove('big-card-in-left');
    document.querySelector('#big-card-left').classList.add('big-card-out-left');

    document.querySelector('#big-card-right').classList.remove('big-card-in-right');
    document.querySelector('#big-card-right').classList.add('big-card-out-right');

    document.querySelector('#show-questions').classList.remove('question-block-in');    
    document.querySelector('#show-questions').classList.add('question-block-out');

    setTimeout(()=>{
        if(cardsFlipped[0].dataset.stop==0){
            cardsFlipped[0].classList.remove('flip-card');
            cardsFlipped[0].classList.add('flip-card-back');
            cardsFlipped[1].classList.remove('flip-card');
            cardsFlipped[1].classList.add('flip-card-back');
        }
        document.querySelector('#big-card-left').classList.remove('big-card-out-left');
        document.querySelector('#big-card-right').classList.remove('big-card-out-right');
        removeImageFromBigCard(`#big-left-img`);
        removeImageFromBigCard(`#big-right-img`);
        document.querySelector('#show-questions').classList.remove('question-block-out');
        document.querySelector('#no-question-block').classList.add('hidden');
        document.querySelector('#correct-block').classList.add('hidden');
        document.querySelector('#incorrect-block').classList.add('hidden')
    },700)
    setTimeout(()=>{
        document.querySelector('#big-container').classList.add('hidden');
        if(!cardsFlipped[0].dataset.stop==0){
            cardsFlipped[0].classList.remove('flip-card-back');
            cardsFlipped[1].classList.remove('flip-card-back');
        }    
        cardsFlipped=[];
        cardFlipBlock=false;
        console.log(gameScore);
        if(gameScore.correct==3) EndGame();
    },1000)
}

const CheckAnswer=event=>{
    document.querySelector('#question-block').classList.add('hidden')
    gameScore.attempts++;
    if(event.target.dataset.a==="1") {
        document.querySelector('#correct-block').classList.remove('hidden');
        cardsFlipped[0].dataset.stop='1';
        cardsFlipped[1].dataset.stop='1';
        gameScore.correct++;
    }
    else document.querySelector('#incorrect-block').classList.remove('hidden');
}

const EndGame=()=>{
    document.querySelector('#your-score').textContent=`Your Score is: ${gameScore.correct} from ${gameScore.attempts} attempts`
    document.querySelector('#dialog-show').classList.remove('hidden');
}

const AddToLeaderboard=async ()=>{
    if(gameScore.posted) return alert("Score already posted");
    const response = await post("http://localhost:3000/addscores",{name:userName,attempts:gameScore.attempts})
    gameScore.posted=true;
    alert("Score Posted");
}


const removeImageFromBigCard=(id)=>{
    const elem = document.querySelector(id);
    const list = [...elem.classList];
    elem.classList.remove(list[1]);
}