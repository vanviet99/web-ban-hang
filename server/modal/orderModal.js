const mongoose = require("mongoose")
const productModal = require('../modal/productModal')
const userModal = require('../modal/userModal')
mongoose.connect('mongodb+srv://ketnoidb:ketnoidb@cluster0.yogryju.mongodb.net/?retryWrites=true&w=majority');

const orderSchema = mongoose.Schema({
    userId:{
        type:String,
        ref:'user'
    },
    list:[],
    username: String,
    address: String,
    totalprice: Number,
    phonenumber: Number,
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type:String,
        default: "panding"
    }
},{collection:'order'})

const orderModal = mongoose.model("order",orderSchema)



module.exports = orderModal