const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    isUser:{
        type:Boolean
    },
    isOrganizer:{
        type:Boolean
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String, 
        required:true
    },
    username: {
        type: String,
        unique: true,
    },
    phone:{
        type:Number, 
        required:true
    },
    email:{
        type:String, 
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String

    },
    address1:{
        type: String
    },
    address2:{
        type: String
    },
    country:{
        type:String
    },
    state:{
        type:String
    },
    city:{
        type:String
    },
    zipCode:{
        type:Number
    },
    nameOnCard:{
        type:String
    },
    cardNum:{
        type:Number
    },
    expireDate:{
        type:Date
    },
    cvv:{
        type:Number
    }

}, {timestamps: true,});

const User = mongoose.model('users', UserSchema);

module.exports = User;