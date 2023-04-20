const router = require("express").Router();
const userController = require("../controllers/userController")
const middlewreController = require('../controllers/middlewareController')
router.get("/",userController.getAlluser)
router.delete("/:id",middlewreController.verifyTokenandadmin,userController.deleteUser)
router.put("/:id",middlewreController.verifyToken,userController.ediUser)
router.get("/getuserlogin", userController.getuserlogin)
router.patch('/updatelike', userController.updatelike)
router.get("/getbyname", userController.getbuyname)
router.get("/getbyID",middlewreController.verifyTokenandadmin, userController.getbuyID)
router.get("/paginiuser", userController.paginiuser)
module.exports = router