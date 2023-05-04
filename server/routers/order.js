const router = require("express").Router();
const orderController = require("../controllers/orderControllers")
const middlewreController = require('../controllers/middlewareController')



router.post("/create", orderController.createorder)
router.post("/update", orderController.updateorder)
router.get("/getall", orderController.getallorder)
router.get("/getlogin/:orderUserId", orderController.getorderlogin)
router.delete("/delete", orderController.deleteorder)

module.exports = router
