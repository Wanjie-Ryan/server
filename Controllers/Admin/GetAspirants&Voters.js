const votersmodel = require('../../Models/voters')
const {StatusCodes} = require('http-status-codes')
const error = require('../../utils/error');
const aspirantmodel = require('../../Models/aspirants')


// GETTING ALL ASPIRANTS

const getAllAspirants = async(req, res, next)=>{

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


// GETTING A SINGLE ASPIRANT

const getSingleAspirant = async(req, res, next)=>{

    try{


        const {id:Aspid} = req.params

        const singleAsp = await aspirantmodel.findById({_id:Aspid})

        if(!singleAsp){

            return res.status(StatusCodes.NOT_FOUND).json({msg:`The Aspirant with the ID: ${Aspid} cannot be found`})
        }

        res.status(StatusCodes.OK).json({msg:`The Aspirant with the ID: ${Aspid} has been fetched successfully`, singleAsp})


    }

    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR), err.message)
    }
}


// UPDATING AN ASPIRANT

const updateAspirant = async(req,res, next)=>{

    try{

        const {id:Aspid} = req.params

        const {name, Position, Represnt} = req.body

        const updateAsp = await aspirantmodel.findByIdAndUpdate({_id:Aspid}, req.body, {

            runValidators:true,
            new:true
        })

        if(!Aspid){

            return res.status(StatusCodes.NOT_FOUND).json({msg:`The Aspirant with id:${Aspid} cannot be found`})
        }

        res.status(StatusCodes.OK).json({msg:`The Aspirant with the id:${Aspid} has been fetched successfully`, updateAsp})

    }

    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR), err.message)
    }
}

// DELETING AN ASPIRANT


const deleteAspirant = async(req,res, next)=>{

    try{



        
        const {id:Aspid} = req.params

        const deleteAsp = await aspirantmodel.findByIdAndDelete({_id:Aspid})

        if(!Aspid){

            return res.status(StatusCodes.NOT_FOUND).json({msg:`The Aspirant with id:${Aspid} cannot be found`})
        }
        
        res.status(StatusCodes.OK).json({msg:`Aspirant with the id:${Aspid} has been deleted successfully`})
    }

    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR), err.message)
    }

}


        // VOTERS




// GETTING ALL VOTERS

const getVoters = async(req, res, next)=>{


    try{

        const allvoters = await votersmodel.find({})

        if(!allvoters){

            return res.status(StatusCodes.NOT_FOUND).json({msg:'No voters found!'})
        }

        res.status(StatusCodes.OK).json({msg:'All voters fetched', allvoters})
        

    }

    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR), err.message)
    }
}


// GETTING A SINGLE VOTER

const getSingleVoter = async(req,res, next)=>{

    try{

        const {id:voterId} = req.params

        const singlevoter = await votersmodel.findById({_id:voterId})

        if(!singlevoter){

            return res.status(StatusCodes.NOT_FOUND).json({msg:`Voter with the id:${voterId} cannot be found`})

        }

        res.status(StatusCodes.OK).json({msg:`Voter with the id:${voterId} has been fetched successfully`, singlevoter})



    }


    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR), err.message)
    }
}


// UPDATING SINGLE VOTER

const updateSingleVoter = async(req,res, next)=>{

    try{

        


    }

    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR), err.message)
    }
    
}



module.exports ={getAllAspirants, getSingleAspirant, updateAspirant, deleteAspirant, getVoters, getSingleVoter,updateSingleVoter}