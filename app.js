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






















// CONNECTION TO THE DB





