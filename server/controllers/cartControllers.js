const Cart = require('../modal/cartModal')

const cartController = {
  addtocart: async (req, res) => {
    const { userId, productId, quantity } = req.body;
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

          let update = await Cart.updateOne({ userId: userId }, { list: cart.list })
          let data = await Cart.find()
          res.status(200).json(data)
        } else {
          //product does not exists in cart, add new item
          let newCart = [...cart.list, {
            productId: req.body.productId, quantity: req.body.quantity
          }]
          let update = await Cart.updateOne({userId: userId}, {list: newCart})
          let data = await Cart.find()
          return res.status(200).json(data);
        }
      } else {
        const newCart = await Cart.create({
          userId: req.body.userId,
          list: [{ productId: req.body.productId, quantity: req.body.quantity }]
        });
        return res.status(201).json(newCart);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Something went wrong");
    }
  },
  delecart : async (req, res) =>{
    try {
      let dele = await Cart.deleteOne({userId: req.body.userId})
      let data = await Cart.find()
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json("Something went wrong");
    }
  },
  getcartlogin : async (req, res) =>{
    try {
      let data = await Cart.find({userId: req.body.userId})
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json("Something went wrong");
    }
  }
}

module.exports = cartController