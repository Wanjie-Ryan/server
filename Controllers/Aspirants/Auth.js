const aspirantmodel = require('../../Models/aspirants')
const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')







const register = (req, res)=>{


    res.send('Register')

}


const login = (req, res)=>{

    res.send('Login')

}


module.exports ={register, login}