let readMessages=true;

const SendMessage = async event=>{
    clearInterval(readMessages);
    event.preventDefault();
    const input = document.querySelector("input[type=text]");
    const text = input.value;
    if(text.length>0){
        let response = await post("http://localhost:3000/sendmessage", {message:text});
        response = await response.json();
        input.value="";
    }
    GetMessages();
}

const GetMessages = async ()=>{
    readMessages=setInterval(async()=>{
        let response = await get("http://localhost:3000/getmessage");
        response = await response.json();
        if(response.ok){
            while(response.messages.length>0){
                const para = document.createElement('p');
                para.textContent=response.messages.pop();
                document.querySelector('#messages').prependTo(para);
            }
        }
    });
}