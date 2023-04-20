const userModal = require("../modal/userModal")
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
// accesstoken

let refreshTokon = []
const authController = {
    //register
    registerUser : async (req, res) =>{
            try {
                const salt = await bcrypt.genSalt(10)
                const password = await bcrypt.hash(req.body.password,salt)
                let newusser = await userModal.create({
                    username : req.body.username,
                    password: password
                })
                const userdata = await userModal.find()
                res.status(200).json({message:'sucsess',userdata})
            } catch (error) {
                res.status(500).json({message:'Username da ton tai',error})
            }
    },
    getaccesstoken:(user) =>{
        return jwt.sign({
            id:user._id,
            admin:user.admin
        },
       'vanviet',
        {expiresIn: "30d"}
        )
    },
    getrefreshTokon: (user) =>{
        return jwt.sign({
            id:user._id,
            admin:user.admin
        },
       'vanvietrefresh',
        {expiresIn: "365d"}
        )
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
                const accesstoken =authController.getaccesstoken(user)
                const refreshTokon = authController.getrefreshTokon(user)
                refreshTokon.pushrefreshTokon
                res.cookie("refreshTokon", refreshTokon,{
                    httpOnly:true,
                    secure:false,
                    path: "/",
                    sameSite:"strict",
                })
            
                const {password, ...others} = user._doc
                res.status(200).json({message:'login thanh cong',...others,accesstoken})
            }
        } catch (error) {
            res.status(500).json({message:'Login khong thanh cong',error},)
        }
    },
requestrefreshtoken: async(req,res) =>{
    const refreshTokon = req.cookies.refreshTokon
    if(!refreshTokon) refreshTokon.status(401).json("bạn chưa đăng nhập")
    if(!refreshTokon.includes(refreshTokon)){
        return res.status(403).json("refreshTokon is not valid")
    }
    jwt.verify(refreshTokon,'vanvietrefresh',(err,user)=>{
        if(err){
            console.log(err)
        }
        refreshTokon = refreshTokon.filter((token)=> token !== refreshTokon)
        const newaccesstoken = authController.getrefreshTokon(user)
        const newrefreshTokon = authController.getrefreshTokon(user)
        refreshTokon.push(newrefreshTokon)
        res.cookie("refreshTokon", newrefreshTokon,{
            httpOnly:true,
            secure:false,
            path: "/",
            sameSite:"strict",
        })
        res.status(200).json({accesstoken:newaccesstoken})
    })
 
}
}
module.exports = authController;