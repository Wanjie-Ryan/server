const votersmodel = require('../../Models/voters')
const {StatusCodes} = require('http-status-codes')
const error = require('../../utils/error');
const aspirant = require('../../Models/aspirants')



const postdetails = async(req, res,next)=>{

    try{

        const {AspirantID, name, phoneNumber} = req.body

        const aspirantperson = await aspirant.findById(AspirantID)

        if(!aspirantperson){

            return res.status(StatusCodes.NOT_FOUND).json({msg:'Aspirant not found'})
        }

        const voterdata = await votersmodel.create({name, phoneNumber, AspirantID:aspirantperson})

        if(!voterdata){

            return res.status(StatusCodes.BAD_REQUEST).json({msg:'Voter not registered'})
        }

         res.status(StatusCodes.CREATED).json({msg:'Voter details submitted successfully', voterdata})


    }

    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR), err.message)
    }
    
}




module.exports ={postdetails}