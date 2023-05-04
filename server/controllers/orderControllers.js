const Order = require("../modal/orderModal")

const orderController = {
    createorder: async (req, res) => {
        try {
            let data = await Order.create({ userId: req.body.userId, list: req.body.list, username: req.body.username, phonenumber:req.body.phonenumber, address: req.body.address, totalprice: req.body.totalprice })
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json("Something went wrong");

        }
    },
    getallorder: async (req, res) => {
        try {
            let data = await Order.find().populate("userId")
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json("Something went wrong");
        }
    },
    deleteorder: async (req, res) => {
        try {
            let dele = await Order.deleteOne({ _id: req.body.orderId })
            let data = await Order.find()
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json("Something went wrong");
        }
    },
    updateorder: async (req, res) => {
        try {
            let update = await Order.updateOne({ _id: req.body.orderId }, { status: req.body.status })
            let data = await Order.find().populate("userId")
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json("Something went wrong");
        }
    },
    getorderlogin: async (req, res) => {
        try {
            let data = await Order.find({ userId: req.params.orderUserId })
            console.log(data);
            res.status(200).json(data)
        } catch (error) {
            res.status(500).json("Something went wrong");
        }
    }
}

module.exports = orderController