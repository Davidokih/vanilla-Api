const footballModel = require("../model/model");

// get all the data
const getAll = async (req, res) => {
    try{
        const info = await footballModel.findAll();
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(info));
    }catch(err){
        console.log(err.message)
    }
}

const getOne =  async (req, res, id)=> {
    try{
        const team = await footballModel.findOne(id)
        if(!team ) {
            res.writeHead(404, {"content-type": "application/json"})
            res.end(JSON.stringify({"message": "Bad request"}))
        } else {
            res.writeHead(200, {"content-type": "application/json"})
            res.end(JSON.stringify(team))
        }
    }catch (err){
        console.log(err.message)
    }
}

// create a static team
const createNewTeam = async (req, res) =>{
    try{
        // create a fake object having some data
        const bodyData = {
            club: "sevilla",
            player: 25,
            country: "Spain"
        }

        const newTeam = await FootballModel.create(bodyData)  
        res.writeHead(201, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(newTeam))      

    }catch(error){
        console.log(error.message)
    }
}

// creating a dynamic team
const createNewDynamicTeam = async (req, res) =>{
    try{
        let body = ''
        req.on('data', function(chunk){
            body += chunk.toString()
        })
        req.on('end', async function() {
            const {club, player, country} = JSON.parse(body)
            const bodyData = {
                club,
                player,
                country
            }
            const newTeam = await FootballModel.createDynamic(bodyData)  
            res.writeHead(201, {'Content-Type': 'application/json'})
            res.end(JSON.stringify(newTeam))
        })
    }catch(error){
        console.log(error.message)
    }
}

module.exports = {
    getTeams,
    getTeam,
    createNewTeam,
    createNewDynamicTeam
}

module.exports = {
    getAll,
    getOne
}