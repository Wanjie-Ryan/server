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
        unique:true,
        required:[true, 'The Aspirant email must be provided'],
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide a valid email',
            
            ], 
    },

    phoneNumber:{

        type:Number,
        unique:true,
        required:[true, 'The Aspirant PhoneNumber must be provided'],
        maxLength:10
    },

    Position:{

        type:String,
        required:[true, 'The Aspirant Position must be provided']
    },

    Represent:{

        type:String,
        required:[true, 'Aspirant must select The position he or she is vying']
    },

    Password:{

        type:String,
        required:[true, 'The Aspirant Password must be provided'],
        minLength:5
    }






})



module.exports = mongoose.model('Aspirant', aspirantSchema)