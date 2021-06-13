const express = require("express");
const { requireSignin, userMiddleware } = require("../common-middleware");
const router = express.Router();
const { addItemToCart, getCartItems } = require("../controller/cart");

router.post(
  "/user/cart/addtocart",
  requireSignin,
  userMiddleware,
  addItemToCart
);
router.post("/user/getCartItems", requireSignin, userMiddleware, getCartItems);

module.exports = router;
