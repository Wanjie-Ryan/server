const votersmodel = require('../../Models/voters')
const {StatusCodes} = require('http-status-codes')
const error = require('../../utils/error');
const aspirantmodel = require('../../Models/aspirants')




const AllVoters = async(req, res, next)=>{


    try{

        const allvoters = await votersmodel.find({})

        const aspirantData = await aspirantmodel.find({})

        allvoters.map((aspirant)=>{

            const aspirantIdinvoters = aspirant.AspirantID
            // console.log(aspirant.AspirantID)


        })

        const originalaspirantId = aspirantData._id

        console.log(originalaspirantId)


        

        if(!allvoters){

            return res.status(StatusCodes.NOT_FOUND).json({msg:'No voters found!'})
        }
        
         res.status(StatusCodes.OK).json({msg:`All voters fetched`, allvoters})

    }

    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR, err.message))

    }




}


module.exports ={AllVoters}