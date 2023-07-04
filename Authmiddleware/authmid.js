const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')





const verifyJwt = (req, res)=>{

    try{

 
        const cookietoken = req.cookies.AspirantToken
        
        console.log(cookietoken)
        
        if(!cookietoken){
            
            res.status(StatusCodes.FORBIDDEN).json({msg:'You are not authenticated to access this route'})
        }
        
        const authHeaders = req.headers.authorization
        
        if(!authHeaders || !authHeaders.StartsWith(' Bearer')){
            
            res.status(StatusCodes.FORBIDDEN).json({msg:'You are not authenticated to access this route'})
        }

        const token = authHeaders.split(' ')[1]

        console.log(token)

        


        jwt.verify(token, process.env.Aspirant_secret_key, (err, decoded)=>{

            if(err){

                return res.status(StatusCodes.FORBIDDEN).json({msg:'You are not authenticated to access this route'})
            }

            const {id, name} = decoded

            req.user ={

                id:id,
                Aspirantname:name
            }

            next()

        })




        
    }

    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR, err.message))



    }




}



module.exports = verifyJwt