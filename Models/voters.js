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

    phoneNumber:{

        type:Number,
        required:[true, 'The voters phoneNumber is required'],
        unique:true,
        
    }

},{timestamps:true})



module.exports = mongoose.model('Voters',VotersSchema )