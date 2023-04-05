const user = require("../modal/userModal")
const bcrypt = require("bcrypt")
const userController = {
    getAlluser : async(req,res)=>{
        try {
            const userdata = await user.find()
            res.status(200).json(userdata)  
        } catch (error) {
            res.status(500).json(error)
        }
    },
    deleteUser : async(req,res)=>{
        try {
           const userdata = await user.findByIdAndDelete(req.params.id)
           res.status(200).json({message:'delete thanh cong',userdata}) 
        } catch (error) {
            res.status(500).json(error)
        }
    },
    ediUser : async(req,res)=>{
try {
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password,salt)
    const data = await user.updateOne({_id:req.params.id},{
        username: req.body.username,
        password: password
    })
    const datalist = await user.find()
    res.status(200).json(datalist) 
} catch (error) {
    res.status(500).json(error)
}
    }
}

module.exports = userController