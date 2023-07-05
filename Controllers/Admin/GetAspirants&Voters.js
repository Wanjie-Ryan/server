const votersmodel = require('../../Models/voters')
const {StatusCodes} = require('http-status-codes')
const error = require('../../utils/error');
const aspirantmodel = require('../../Models/aspirants')




const getAspirants = async(req, res, next)=>{

    try{

        const allaspirants = await aspirantmodel.find({})

        if(!allaspirants){

            return res.status(StatusCodes.NOT_FOUND).json({msg:'No aspirants found!'})
        }
        
         res.status(StatusCodes.OK).json({msg:`All aspirants fetched`, allaspirants})

    }

    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR, err.message))

    }

}


const getVoters = async(req, res, next)=>{


    try{

        const allvoters = await aspirantmodel.find({})

        if(!allvoters){

            return res.status(StatusCodes.NOT_FOUND).json({msg:'No voters found!'})
        }

        res.status(StatusCodes.OK).json({msg:'All voters fetched', allvoters})
        

    }

    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR), err.message)
    }
}


module.exports ={getAspirants, getVoters}