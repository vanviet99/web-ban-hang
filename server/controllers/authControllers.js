const userModal = require("../modal/userModal")
const user = require("../modal/userModal")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const authController = {
    //register
    registerUser : async (req, res) =>{
            try {
                const salt = await bcrypt.genSalt(10)
                const password = await bcrypt.hash(req.body.password,salt)
                let newusser = await user.create({
                    username : req.body.username,
                    password: password
                })
                res.status(200).json({message:'sucsess',newusser})
            } catch (error) {
                res.status(500).json(error)
            }
    },
    loginUser : async(req,res) =>{
        try {
            const user = await userModal.findOne({username:req.body.username})
            if(!user){
                res.status(404).json("wrong username")
            }
            const valipassword = await bcrypt.compare(
                req.body.password,
                user.password
            )
            if(!valipassword){
                res.status(404).json("wrong password")
            }
            if(user && valipassword){
                const accesstoken=   jwt.sign({
                    id:user._id,
                    admin:user.admin
                },
               'vanviet',
                {expiresIn: "30d"}
                )
                const {password, ...others} = user._doc
                res.status(200).json({message:'login thanh cong',...others,accesstoken})
            }
        } catch (error) {

            res.status(500).json({message:'Login khong thanh cong',error},)
        }
    }
}
module.exports = authController;