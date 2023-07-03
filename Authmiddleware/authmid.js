const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')





const verifyJwt = (req, res)=>{


    const token = req.cookies.AspirantToken

    console.log(token)

    if(!token){

        res.status(StatusCodes.FORBIDDEN).json({msg:'You are not authenticated to access this route'})
    }


}



module.exports = verifyJwt