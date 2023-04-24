const router = require("express").Router();
const productController = require("../controllers/productControllers")
const middlewreController = require('../controllers/middlewareController')


router.post("/create",  productController.createproduct)
router.get("/getall", productController.getallproduct)
router.delete("/delete", productController.deleproduct)
router.post("/adminupdate", productController.updateproduct)
router.post("/updaterate", productController.updateRate)
router.post("/updatelike",middlewreController.verifyToken, productController.updatelike)
router.get("/findbyname", productController.findbyname)
router.get("/findbybrand/:brand", productController.findbybrand)
router.get("/findbyID/:productId", productController.findbyID),
router.post("/comment", productController.updateComment)

module.exports = router