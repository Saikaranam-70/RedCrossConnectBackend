const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    mobilenumber:{
        type:String,
        required:true
    },
    name:{
        type:String, 
        required:true
    },
    bloodgroup:{
        required:true,
        type:String
    },
    country:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    dateOfLastDonation:{
        type:Date
    },
    isEligible:{
        type:Boolean,
        required:true
    },
    profile:{
        type:String
    }
})
const User = mongoose.model('User', userSchema);
module.exports= User