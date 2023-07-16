const votersmodel = require('../../Models/voters')
const {StatusCodes} = require('http-status-codes')
const error = require('../../utils/error');
const aspirant = require('../../Models/aspirants')
const jwt = require('jsonwebtoken')


const postdetails = async(req, res,next)=>{

    try{

        const {AspirantID, name, phoneNumber} = req.body

        const aspirantperson = await aspirant.findById(AspirantID)

        if(!aspirantperson){

            return res.status(StatusCodes.NOT_FOUND).json({msg:'Aspirant not found'})
        }

        const voterdata = await votersmodel.create({name, phoneNumber, AspirantID:aspirantperson._id})

        if(!voterdata){

            return res.status(StatusCodes.BAD_REQUEST).json({msg:'Voter count not registered'})
        }

        const token = jwt.sign({id:voterdata._id}, process.env.Voter_key, {expiresIn:'7d'})

        res.set({voterToken:token})

         res.status(StatusCodes.CREATED).json({msg:'Voter details submitted successfully', voterdata})

    }

    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR), err.message)
        console.log(err)
        // next(error(StatusCodes.INTERNAL_SERVER_ERROR, err.message))

    }
    
}

const verifyToken = async(req, res, next)=>{

    try{

        if (req.headers.authorization) {

            const authHeader = req.headers.authorization
            const token = authHeader.replace('Bearer ', '')
            const decoded = jwt.verify(token, process.env.Voter_key)
            req.token = decoded

            res.json({type:'success'})
        }

        else {

            throw new Error()
        }
    }

    catch(err){

        // next(error(StatusCodes.INTERNAL_SERVER_ERROR, err.message))

        res.json({ type: 'error', message: 'You cannot vote again', details: err })

    }
}





module.exports ={postdetails,verifyToken}