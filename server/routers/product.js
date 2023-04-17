const router = require("express").Router();
const productController = require("../controllers/productControllers")
const middlewreController = require('../controllers/middlewareController')


router.post("/create", middlewreController.verifyTokenandadmin, productController.createproduct)
router.get("/getall",middlewreController.verifyTokenandadmin, productController.getallproduct)
router.delete("/delete",middlewreController.verifyTokenandadmin, productController.deleproduct)
router.patch("/adminupdate",middlewreController.verifyTokenandadmin, productController.updateproduct)
router.patch("/updaterate",middlewreController.verifyToken, productController.updateRate)
router.patch("/updatelike",middlewreController.verifyToken, productController.updatelike)
router.get("/findbyname", productController.findbyname)
router.get("/findbybrand", productController.findbybrand)
router.get("/findbyID", productController.findbyID),
router.get("/comment", productController.updateComment)

module.exports = router