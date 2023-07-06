const votersmodel = require('../../Models/voters')
const {StatusCodes} = require('http-status-codes')
const error = require('../../utils/error');
const aspirantmodel = require('../../Models/aspirants')




const AllVoters = async(req, res, next)=>{


    try{

        let aspirantIdinvoters
        let originalAspID
        let matchedvoters = []
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

    //    console.log(aspvo)

       
       if(aspvo === originalAspID.toString() ){
           
           aspirantsvoters = await votersmodel.find({AspirantID:aspvo})

           console.log(aspirantsvoters)

           matchedvoters.push(aspirantsvoters)
           
        }
        
        //    else{

    //         return res.status(StatusCodes.NOT_FOUND).json({msg:'No voters fetched'})
    //    }

       if(matchedvoters.length === 0){

            return res.status(StatusCodes.NOT_FOUND).json({msg:'No voters have been fetched'})
       }

       return res.status(StatusCodes.OK).json({msg:`The voters who voted for you are:` , voters:matchedvoters})




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