const http = require('http');
const PORT = 5000;
// const footballController = require('./controller/footballerController')
const {getAll, getOne} = require('./controller/Controller')

const server = http.createServer((req, res)=>{
    if(req.url === "/api/football" && req.method === "GET"){
        res.writeHead(200, {'Content-Type': 'application/json'})
        getAll(req, res)
    }else if (req.url.match(/\/api\/football\/([0-9)])/)  && req.method === "GET"){
        res.writeHead(200, {"content-type": "application/json"})
        const id = req.url.split("/")[3]
        getOne(req, res, id)
    }else if(req.url === "/api/football" && req.method === "POST"){
        createNewTeam(req, res)
    }else if(req.url === "/api/football/dynamic" && req.method === "POST"){
        createNewDynamicTeam(req, res)
    }else{
        console.log("error in loading this page")
    }
});

server.listen(PORT, ()=>{
    console.log(`Server is listening to port: ${PORT}`);
});