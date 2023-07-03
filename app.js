const express = require('express');
const app = express();
const port = process.env.port || 3007
const conectionDB = require('../server/DB/db')
const cors = require('cors')
const helmet = require('helmet')
const xss = require('xss-clean')
const cookie = require('cookie-parser')
const rateLimit = require('express-rate-limit')
require('dotenv').config()
const {StatusCodes} = require('http-status-codes')

// ASPIRANT
const Authaspirant = require('../server/Routes/Aspirants/Auth')




//SECURITY MIDDLEWARES  

app.use(cors())
app.use(helmet())
app.use(xss())
app.use(cookie())
app.use(express.json())
app.set('trust proxy', 1)
app.use(rateLimit({
    windowsMs:15*60*100,
    max:100
}))



//ROUTES

app.use('/api/aspirant/auth', Authaspirant)











//ERROR HANDLING MIDDLEWARE


app.use((err, req, res, next)=>{

    const errorstatus = err.status || StatusCodes.INTERNAL_SERVER_ERROR
    const errormessage = err.message || 'Something went wrong'
    return res.status(errorstatus).json({
        success:false,
        status:errorstatus,
        message:errormessage,
        stack:err.stack,
    })
})





// CONNECTION TO THE DB


const DBConnection = async() =>{


    try{

        await conectionDB(process.env.mongo_url)

        app.listen(port, ()=>{

            console.log(`server is running on port, ${port}`)
        })



    }

    catch(err){

        console.log(err)
        process.exit(1)


    }
}


DBConnection()



