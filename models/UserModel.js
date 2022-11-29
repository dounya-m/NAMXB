const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    name:{
        type: String,
        lowercase: true,
        required: [true, 'please enter your name'],
    },
    
    phone:{
        type: String,
        required: [true, 'please enter your phone number']
    },

    email:{
        type: String,
        lowercase: true,
        unique: true,
        required: [true, 'please enter your email']
    },

    password:{
        type: String,
        required: [true, 'please enter your password']
    }
},{
    timestamp: true
})

module.exports = 
// mongoose.model('User', UserSchema)

mongoose.models.User || mongoose.model('User', UserSchema);