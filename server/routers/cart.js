const router = require("express").Router();
const cartController = require("../controllers/cartControllers")
router.post("/cart", cartController.addtocart)
router.delete("/delete", cartController.delecart)
router.get("/get", cartController.getcartlogin)

module.exports = router
