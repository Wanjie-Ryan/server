const votersmodel = require('../../Models/voters')
const {StatusCodes} = require('http-status-codes')
const error = require('../../utils/error');
const aspirantmodel = require('../../Models/aspirants')




const AllVoters = async(req, res, next)=>{


    try{

        const allvoters = await votersmodel.find({})

        const aspirantData = await aspirantmodel.find({})

        let aspirantIdinvoters
        let originalAspID

        allvoters.map((aspirant)=>{

             aspirantIdinvoters = aspirant.AspirantID
             console.log(aspirantIdinvoters)


        })

       aspirantData.map((originalaspirant)=>{

             originalAspID = originalaspirant._id
             console.log(originalAspID)
       })

       if(aspirantIdinvoters.toString() === originalAspID.toString() ){

            return res.status(StatusCodes.OK).json({msg:`The voters that voted for you are:`, voters:allvoters})


       }

       else{

            return res.status(StatusCodes.NOT_FOUND).json({msg:'No voters fetched'})
       }




        // if(!allvoters){

        //     return res.status(StatusCodes.NOT_FOUND).json({msg:'No voters found!'})
        // }
        
        //  res.status(StatusCodes.OK).json({msg:`All voters fetched`, allvoters})

    }

    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR, err.message))

    }




}


module.exports ={AllVoters}