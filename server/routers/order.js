const router = require("express").Router();
const orderController = require("../controllers/orderControllers")
const middlewreController = require('../controllers/middlewareController')



router.post("/create",middlewreController.verifyToken, orderController.createorder)
router.patch("/update",middlewreController.verifyTokenandadmin, orderController.updateorder)
router.get("/getall", middlewreController.verifyTokenandadmin, orderController.getallorder)
router.get("/getlogin",middlewreController.verifyToken, orderController.getorderlogin)
router.delete("/delete",middlewreController.verifyTokenandadmin, orderController.deleteorder)

module.exports = router
