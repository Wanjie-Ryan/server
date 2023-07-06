const {StatusCodes} = require('http-status-codes')
const error = require('../../utils/error');
const aspirantmodel = require('../../Models/aspirants')
const bcrypt = require('bcryptjs')


const updateAspirant = async(req, res, next)=>{

    try{

        const {image, name, email, phoneNumber, Position, Represent, Password} = req.body

        if(Password){

            const salt =await bcrypt.genSalt(10)
            const hashedpassword = await bcrypt.hash(Password,salt)
            req.body.Password = hashedpassword
        }



        const {id:Aspid} = req.params

        const updateaspirant = await aspirantmodel.findOneAndUpdate({_id:Aspid}, req.body, {

            new:true,
            runValidators:true 
        })

        if(!updateaspirant){

            return res.status(StatusCodes.NOT_FOUND).json({msg:`Aspirant with ID:${updateaspirant} cannot be found`})
        }

        res.status(StatusCodes.OK).json({msg:'Aspirant details updated sucessfully', updateaspirant})


    }

    catch(err){


        next(error(StatusCodes.INTERNAL_SERVER_ERROR, err.message))
    }
    


}

module.exports ={updateAspirant}