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
    thumb:String,
    brand: String,
    amountlike: {
        type: Number,
        default: 0
    },
    rate: []
},{collection:'product'})

const productModal = mongoose.model("product",productSchema)
// productModal.create({
//     name:'Túi frame nữ quai xách hợp kim Balana', price: 229000,description:'Được làm từ chất liệu da PU cao cấp có độ mềm cao, túi xách nữ Balana thu hút bởi quai xách nhỏ hợp kim mạ điện sáng bóng, mảnh mai rất thanh lịch, dù mặc trang phục sang trọng hay đơn giản vẫn có thể dễ dàng kết hợp cùng chiếc túi này phù hợp khi đi dự tiệc, dạo phố gặp gỡ bạn bè',thumb:'https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/v1qjiwbt_large.jpg'
//     ,typee :'Túi Xách'
// },
// {
//     name:'Túi Shoulder Bag móc treo rua rua DFJL', price: 359000,description:'Phong cách Âu Mỹ đơn giản không làm mất đi vẻ thanh lịch quyến rũ của người phụ nữ, túi Shoulder Bag móc treo rua rua DFJL chất liệu da PU cao cấp, thiết kế tiện dụng thích hợp sử dụng khi đi làm, đi chơi hay shopping sẽ là xu hướng hót nhất xuân hè này',thumb:'https://tuixach.giaodienwebmau.com.vn/wp-content/uploads/2020/09/kgp6hvho_large-1.jpg'
//     ,typee :'Túi Xách'
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })
module.exports = productModal