const aspirantmodel = require('../../Models/aspirants')
const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')
const error = require('../../utils/error');






const register = async(req, res, next)=>{

    try{

        const aspirantregister =  await aspirantmodel.create({...req.body})
    
        if(!aspirantregister){
    
            return next(error('Aspirant not registered', StatusCodes.BAD_REQUEST))
        }
    
        return res.status(StatusCodes.CREATED).json({msg:"Aspirant registered successfully." ,aspirantregister})
    
        

    }

    catch(err){

        next(err(StatusCodes.INTERNAL_SERVER_ERROR, err.message))
    }


}


const login = async(req, res, next)=>{

    try{

        const {email, Password} = req.body
        




    }

    catch(err){



    }

}


module.exports ={register, login}