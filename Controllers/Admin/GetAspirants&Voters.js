const votersmodel = require('../../Models/voters')
const {StatusCodes} = require('http-status-codes')
const error = require('../../utils/error');
const aspirantmodel = require('../../Models/aspirants')




const getAspirants = (req, res)=>{


    res.send('hey')

}


const getVoters = (req, res)=>{


    res.send('jhop')
}


module.exports ={getAspirants, getVoters}