const mongoose = require("mongoose")
mongoose.connect('mongodb+srv://ketnoidb:ketnoidb@cluster0.yogryju.mongodb.net/?retryWrites=true&w=majority');

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
    },
    listlike : [
        { 
            productId : {
                type: String,
                ref: "product"
            }
        }
    ]
},{collection:'user'})

const userModal = mongoose.model("user",userSchema)

module.exports = userModal