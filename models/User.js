const mongoose = require('mongoose');
const validator = require('validator');
const usersSchema = mongoose.Schema(
    {
    name : { type : String, required : true  },
    age : { type : Number, required : true  },
    email : {type : String ,unique: true,
        required: true,
        validate:{
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email',
            isAsync: false
          }}
       
    })
 const User = mongoose.model('user', usersSchema);
 module.exports = User;
