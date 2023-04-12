const mongoose = require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/webbanhang');

const productSchema = mongoose.Schema({
    name : String,
    price: Number,
    description: String,
    sale :{
        type:Number,
        default:0
    },
    date: {
        type: Date,
        default: Date.now
    },
    stock: Number,
    thumb:String
},{collection:'product'})

const productModal = mongoose.model("product",productSchema)