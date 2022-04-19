// Can be further simplified using fetch

const spacePeople = () =>{
    return new Promise((resolves, rejects) =>{
        const api = 
        "http://api.open-notify.org/astros.json";
        const request = new XMLHttpRequest();
        request.open("GET", api);
        request.onload = () =>{
            if(request.status === 200){
                resolves(JSON.parse(request.response));
            }
            else{
                rejects(Error(request.statusText));
            }
        };
        request.onerror =  err => rejects(err);
        request.send();
        (err) => console.error(new Error("Can't load people"))
    });
};

spacePeople().then((spaceData) => console.log(spaceData));