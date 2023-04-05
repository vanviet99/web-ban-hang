const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/webbanhang');

const productSchema = mongoose.Schema({
    userid :{
        type: String,
        ref:'user'
    },
    name : String,
    price: Number,
    title: String,
    sale :{
        type:Number,
        default:0
    },
    date: Date
},{collection:'product'})

const productModal = mongoose.model("product",productSchema)