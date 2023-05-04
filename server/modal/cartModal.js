const mongoose = require("mongoose")
const productModal = require('../modal/productModal')
const userModal = require('../modal/userModal')
mongoose.connect('mongodb+srv://ketnoidb:ketnoidb@cluster0.yogryju.mongodb.net/?retryWrites=true&w=majority');

const cartSchema = mongoose.Schema({
    userId:{
        type:String,
        ref:'user'
    },
    list:[
        {
            productId:{
                type:String,
                ref:"product"
            },
            quantity:Number
        }
    ],
    date: {
        type: Date,
        default: Date.now
    },
},{collection:'cart'})

const cartModal = mongoose.model("cart",cartSchema)
// orderModal.create({
//     userId:'642cf4ba0937e1ef085969ee',list:[{productId:'6436984b1502de71bc95272b',quantity:2}]
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })

// cartModal.
//   findOne()
//   .populate("userId")
//   .populate("list.productId")
//   .then((data)=>{
//         console.log(data.list)
//     })
//     .catch((err)=>{
//         console.log(err)
//     })


module.exports = cartModal