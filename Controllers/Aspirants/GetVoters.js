const votersmodel = require('../../Models/voters')
const {StatusCodes} = require('http-status-codes')
const error = require('../../utils/error');
const aspirantmodel = require('../../Models/aspirants')
const jwt = require('jsonwebtoken')



const AllVoters = async(req, res, next)=>{


    try{

        let aspirantIdinvoters
        let originalAspID
        let aspirantsvoters

        const allvoters = await votersmodel.find({ })

        const aspirantData = await aspirantmodel.find({})



    
        allvoters.map((aspirant)=>{

             aspirantIdinvoters = aspirant.AspirantID
            //  console.log(aspirantIdinvoters)


        })

       aspirantData.map((originalaspirant)=>{

             originalAspID = originalaspirant._id
            //  console.log(originalAspID)
       })

       let aspvo = aspirantIdinvoters.toString()

    

       
       if(aspvo === originalAspID.toString() ){
           
           aspirantsvoters = await votersmodel.find({AspirantID:aspvo})

           const aspvoterscount = aspirantsvoters.length

           

        
            return res.status(StatusCodes.OK).json({msg:`The voters who voted for you are:` , voters:aspirantsvoters, count:aspvoterscount})
        }
        
        else{

            return res.status(StatusCodes.NOT_FOUND).json({msg:'No voters fetched'})
        }


    }

    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR, err.message))

    }




}


module.exports ={AllVoters}