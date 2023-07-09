const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')
const error = require('../../server/utils/error');



const verifyJwt = (req, res, next)=>{

    try{

 
        const cookietoken = req.cookies.AspirantToken
        
        // console.log(cookietoken)
        
        if(!cookietoken){
            
            res.status(StatusCodes.FORBIDDEN).json({msg:'You are not authenticated to access this route'})
        }
        
        // const authHeaders = req.headers.authorization
        
        // if(!authHeaders || !authHeaders.startsWith(' Bearer')){
            
        //     res.status(StatusCodes.FORBIDDEN).json({msg:'You are not authenticated to access this route'})
        // }

        // const token = authHeaders.split(' ')[1]

        // console.log(token)

        


        jwt.verify(cookietoken, process.env.Aspirant_secret_key, (err, decoded)=>{

            if(err){

                return res.status(StatusCodes.FORBIDDEN).json({msg:'You are not authenticated to access this route'})
            }

            const {id, name} = decoded

            req.user ={

                id:id,
                Aspirantname:name
            }

            
        })
        
        
        
        
        
    }
    
    catch(err){
        
        next(error(StatusCodes.INTERNAL_SERVER_ERROR, err.message))
        
        
        
    }
    
    next()



}



module.exports = verifyJwt