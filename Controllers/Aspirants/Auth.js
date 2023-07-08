const aspirantmodel = require('../../Models/aspirants')
const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')
const error = require('../../utils/error');





const register = async(req, res, next)=>{

    try{

        const aspirantregister =  await aspirantmodel.create({...req.body})
    
        if(!aspirantregister){
    
            return next(error('Aspirant not registered', StatusCodes.BAD_REQUEST))
        }
    
        return res.status(StatusCodes.CREATED).json({msg:"Aspirant registered successfully." ,aspirantregister})
    
        

    }

    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR, err.message))
    }


}


const login = async(req, res, next)=>{

    try{

        const {email, Password} = req.body


        if(!email || !Password){

            res.status(StatusCodes.BAD_REQUEST).json({msg:'Please provide the email and the password'})
        }

        const AspirantEmail = await aspirantmodel.findOne({email})

        if(!AspirantEmail){

            res.status(StatusCodes.NOT_FOUND).json({msg:'The Email does not exist!'})
        }

        const aspirantnew = AspirantEmail.toObject()
        delete aspirantnew.Password
        delete aspirantnew.phoneNumber
        delete aspirantnew.email
        delete aspirantnew.image

        const correctPassword = await AspirantEmail.checkpwd(Password);

        if (!correctPassword) {
          return res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ msg: "Incorrect password" });
        }
    
        
        const token = jwt.sign({id:AspirantEmail._id, name:AspirantEmail.name}, process.env.Aspirant_secret_key, {expiresIn:'1d'})
        
        // console.log(token)
        
        
        
        res.status(StatusCodes.OK).cookie('AspirantToken', token, {secure:true, httpOnly:true, maxAge:24*60*60}).json({msg:'Aspirant has been logged in successfully', aspirantnew })


    }

    catch(err){

        next(error(StatusCodes.INTERNAL_SERVER_ERROR, err.message))


    }

}


const logout = (req, res)=>{

    res.clearCookie('AspirantToken', { secure: true, httpOnly: true }).json({ msg: 'Logged out successfully' })

}


module.exports ={register, login,logout}