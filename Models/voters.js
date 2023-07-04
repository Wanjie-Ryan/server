const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')



const VotersSchema = mongoose.Schema({

    AspirantID:{

        type:mongoose.Schema.Types.ObjectId, ref:'Aspirant'
    },

    name:{

        type:String,
        required:[true, 'The voters name is required']

    },

    email:{

        type:String,
        required:[true, 'The voters email is required'],
        unique:true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide a valid email',
            
            ],
    }

},{timestamps:true})



module.exports = mongoose.model('Voters',VotersSchema )