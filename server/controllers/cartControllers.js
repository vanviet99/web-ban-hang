const Cart = require('../modal/cartModal')

const cartController ={
  addtocart: async(req,res)=>{
    const {userId, productId, quantity } = req.body;
    try {
      let cart = await Cart.findOne({ userId });
      if (cart) {
        //cart exists for user
        let itemIndex = cart.list.findIndex(p => p.productId == productId);
        if (itemIndex > -1) {
          //product exists in the cart, update the quantity
          let productItem = cart.list[itemIndex];
          productItem.quantity = quantity;
          cart.list[itemIndex] = productItem;
        } else {
          //product does not exists in cart, add new item
       const newCart = {
         productId:req.body.productId, quantity:req.body.quantity
          }
          cart.list.push(newCart);
        }
        cart = await cart.save();
        return res.status(201).json(cart);
      } else {
        const newCart = await Cart.create({
          userId : req.body.userId,
          list: [{ productId:req.body.productId, quantity:req.body.quantity}]
        });
        return res.status(201).json(newCart);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Something went wrong");
    }
  }
}

module.exports = cartController