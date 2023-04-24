const router = require("express").Router();
const cartController = require("../controllers/cartControllers")
router.post("/cart", cartController.addtocart)
router.post("/delete", cartController.delecart)
router.get("/get/:userId", cartController.getcartlogin)
router.post("/updatenewCart", cartController.updatenewCart)

module.exports = router
