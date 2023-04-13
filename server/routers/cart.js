const router = require("express").Router();
const cartController = require("../controllers/cartControllers")
router.post("/cart", cartController.addtocart)
module.exports = router
