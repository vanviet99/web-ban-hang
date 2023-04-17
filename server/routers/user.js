const router = require("express").Router();
const userController = require("../controllers/userController")
const middlewreController = require('../controllers/middlewareController')
router.get("/",middlewreController.verifyToken,userController.getAlluser)
router.delete("/:id",middlewreController.verifyTokenandadmin,userController.deleteUser)
router.put("/:id",middlewreController.verifyToken,userController.ediUser)
router.get("/getuserlogin", userController.getuserlogin)
router.patch('/updatelike', userController.updatelike)
module.exports = router