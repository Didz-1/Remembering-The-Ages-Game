let authToken = ""

const createGetString = (urlName, vars) => (!vars)?urlName:urlName+"?"+Object.entries(vars).map(prop => `${prop[0]}=${prop[1]}`).join(";")

const post = async (urlName, body) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorisation": authToken
        },
        body: JSON.stringify(body)
    }
    let respP = await fetch(urlName, options)
    if(respP.status === 201){
        respP = await respP.json();
        return {ok:true,data:respP};
    }
    console.log(respP);
    const message = await response.text();
    return {ok:false,message:text}
}

const get = async (urlName, vars) => {
    const urlAddr = createGetString(urlName,vars);
    const options={
        method:"GET",
        headers:{authorisation: authToken}
    }
    const respG = await fetch(urlAddr,options)
    const g = await respG.json()
    return g;
}

const del = async (urlName,vars) => {
    const urlAddr = createGetString(urlName,vars);
    console.log(urlAddr)
    const options={
        method:"DELETE",
        headers:{authorisation: authToken}
    }
    const respD = await fetch(urlAddr, options)
    if(respD.status==201) return {ok:true};
    const d = await respD.text()
    return {ok:false,message:d};
}