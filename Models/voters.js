const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const VotersSchema = mongoose.Schema({

    AspirantID:{

        type:mongoose.Schema.Types.ObjectId, ref:'Aspirant'
    },

    name:{
        
    }
})