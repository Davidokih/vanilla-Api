const footballData = require('../data/dummy.json')
const {v4: uuidv4} = require('uuid')
const {writeToFile} = require('../../class workapi/myserver/utils')

const findAll = (req, res)=>{
    return new Promise((resolve, reject)=>{
        resolve(footballData);
    });
    
}

const findOne = (id) =>{
    return new Promise((resolve, reject) => {
        const team = footballData.find((t) => t.id === id    
        )
        resolve(team)
    })
}

const create = (team) =>{
    return new Promise((resolve, reject)=>{
        // get an id for the new team
        const teamID = {id: uuidv4(), ...team}
        // add the newTeam to the previous array using its id.
        FootballData.push(teamID)
        // write the new array to a file
        writeToFile('./data/dummy.json', FootballData)
        resolve(teamID)
    })
}

const createDynamic = (team) =>{
    return new Promise((resolve, reject)=>{
        // get an id for the new team
        const teamID = {id: uuidv4(), ...team}
        // add the newTeam to the previous array using its id.
        FootballData.push(teamID)
        // write the new array to a file
        writeToFile('./data/dummy.json', FootballData)
        resolve(teamID)
    })
}


module.exports = {
    allTeam,
    oneTeam,
    create,
    createDynamic
}

module.exports = {
    findAll,
    findOne
}