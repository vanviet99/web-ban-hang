const jwt = require('jsonwebtoken')

const middlewreController = {
    verifyToken:(req,res,next)=>{
        const token = req.headers.token
        if(token){
            //Bearer    
            const accesstoken = token.split(" ")[1]
            jwt.verify(accesstoken,"vanviet",(err,user)=>{
                if(err){
                    res.status(403).json("Token bi sai")
                }
                req.user = user
                next()
            })
        }
        else{
            res.status(401).json('Chua Dang Nhap')
        }
    },
    verifyTokenandadmin:(req,res,next)=>{
        middlewreController.verifyToken(req,res,()=>{
            if(req.user.id == req.params.id || req.user.admin){
                next()
            }else{
                res.status(403).json("ban khong duoc cap quyen")
            }
        })
    }
}
module.exports = middlewreController