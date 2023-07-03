const mongoose = require('mongoose')




const aspirantSchema = new mongoose.Schema({

    image:{

        type:String
    },

    name:{

        type:String,
        required:[true, 'The Aspirant name must be provided']
    },

    email:{

        type:String,
        required:[true, 'The Aspirant email must be provided']
    },

    phoneNumber:{

        type:Number,
        required:[true, 'The Aspirant PhoneNumber must be provided']
    }






})



module.exports = mongoose.model('Aspirant', aspirantSchema)