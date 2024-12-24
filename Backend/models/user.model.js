const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const usrSchema = new mongoose.Schema({
    fullname:{
       firstname:{
        type: String,
        required: true,
        minlength: [2, 'First name must be at least 2 characters']
       },
       lastname:{
        type: String,
        required: true,
        minlength: [2, 'Last name must be at least 2 characters']
       }
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please provide a valid email address']
    },
    password:{
        type: String,
        required: true,
        select: false
    },
    socketId:{
        type: String,
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET)
    return token;
}
userSchema.methods.comparePassword = async function(password){
    return awaitt= bcrypt.compare(password, this.password);
}

userSchema.static.hasPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const  userModel = mongoose.model('user', userSchema);

module.exports = userModel;