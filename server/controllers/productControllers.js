const Product = require('../modal/productModal')

const productController = {
    createproduct: async (req, res) => {
        try {
            const { name, price, description, sale, stock, thumb, brand } = req.body
            let data = await Product.create({
                name: name,
                price: price,
                description: description,
                sale: sale,
                stock: stock,
                thumb: thumb,
                brand: brand
            })
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json("Something went wrong");
        }
    },
    getallproduct: async (req, res) => {
        try {
            const { page, pagesize} = req.body
            let data = await Product.find().skip((page - 1) * pagesize).limit(pagesize)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json("Something went wrong");
        }
    },
    deleproduct: async (req, res) => {
        try {
            let dele = await Product.deleteOne({ _id: req.body.productId })
            let data = await Product.find()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json("Something went wrong");
        }
    },
    updateproduct: async (req, res) => {
        try {
            const { name, price, description, sale, stock, thumb, brand, productId } = req.body
            let update = await Product.updateOne({ _id: productId }, {
                name, price, description, sale, stock, thumb, brand
            })
            let data = await Product.find()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json("Something went wrong");
        }
    },
    findbyname: async(req, res) =>{
        try {
            const { page, pagesize} = req.body
            let listproduct =await Product.find()
            listproduct = listproduct.filter(value => value.include(req.body.name))
            let A = await listproduct.skip((page - 1) * pagesize).limit(pagesize)
            res.status(200).json(A)
        } catch (error) {
            res.status(500).json("Something went wrong");
        }
    },
    findbybrand: async(req, res) =>{
        try {
            const {  arrangement} = req.body
            if(!arrangement){
                let data= await Product.find({brand : req.body.brand})
                res.status(200).json(data)
            }else{
                if(arrangement == "dec"){
                    let data= await Product.find({brand : req.body.brand})
                    data = data.sort(function(a,b){
                        return a- b
                    })
                    res.status(200).json(data)
                }else{
                    let data= await Product.find({brand : req.body.brand})
                    data = data.sort(function(a,b){
                        return b - a
                    })
                    res.status(200).json(data)
                }
            }
        } catch (error) {
            res.status(500).json("Something went wrong");
        }
    },
    findbyID : async(req, res) =>{
        try {
            let data = await Product.find({_id : req.body.productId})
        } catch (error) {
            res.status(500).json("Something went wrong");
        }
    },
    updatelike : async (req, res) =>{
        try {
            const { page, pagesize} = req.body
            let product  = await Product.find({_id: req.body.productId})
            let newamount = product.amountlike + 1
            let update  = await Product.updateOne({_id: req.body.productId}, { amountlike : newamount })
            let data = await Product.find().skip((page - 1) * pagesize).limit(pagesize)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json("Something went wrong");
        }
    },
    updateRate : async(req, res) =>{
        try {
            const { page, pagesize} = req.body
            let product  = await Product.find({_id: req.body.productId})
            let newRate  = [...product.rate, req.body.rate]
            let update = await Product.updateOne({_id: req.body.productId}, {rate: newRate})
            let data = await Product.find().skip((page - 1) * pagesize).limit(pagesize)
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json("Something went wrong");
        }
    },
    updateComment: async(req, res) =>{
        try {
            let product = await Product.find({_id: req.body.productId})
            let newcmt  = [...product.comment, req.body.cmt]
            let update = await Product.updateOne({_id: req.body.productId}, {comment: newcmt})
            let data = await Product.find({_id: req.body.productId}).populate("comment.userId")
            req.status(200).json(data)
        } catch (error) {
            res.status(500).json("Something went wrong");
        }
    }


}
module.exports = productController
