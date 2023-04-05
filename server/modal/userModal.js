const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/webbanhang');

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required:true,
        minlength:6,
        maxlength:20,
        unique:true
    },
    password:{
        type: String,
        required:true,
        minlength:6,
    },
    admin:{
        type:Boolean,
        default:false,
    }
},{collection:'user'})

const userModal = mongoose.model("user",userSchema)

module.exports = userModal