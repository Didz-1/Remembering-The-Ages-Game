let listeningRef;
let pauseForListen=false;

const listen=(callback)=>{
    listeningRef = setInterval(async()=>{
        pauseForListen=true;
        const messages = await get("http://localhost:3000/getMessages");
        pauseForListen=false;
        if(messages.length>0)callback(messages);
    },10000)
}

const stopListening=()=>clearInterval(listeningRef);

const sendMessage=async (dest,text)=>{
    const message = {author:authToken,text:text,dest:dest}
    const response = await post("http://localhost:3000/sendMessage",message);
    console.log(response);
}