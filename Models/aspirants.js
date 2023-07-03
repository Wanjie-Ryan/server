const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");


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

},{timestamps:true})

aspirantSchema.pre("save", async function (next) {

    try {

      const salt = await bcrypt.genSalt(10);
      this.Password = await bcrypt.hash(this.Password, salt);
      next();

    } catch (err) {
      next(err);
    }

  });
  
  aspirantSchema.methods.checkpwd = async function (candidatePassword) {

    try {

      const isMatch = await bcrypt.compare(candidatePassword, this.Password);
      return isMatch;

    } catch (err) {
      throw err;
    }
  };
  





module.exports = mongoose.model('Aspirant', aspirantSchema)