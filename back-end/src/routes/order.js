const { addOrder, getOrders } = require("../controller/order");
const { requireSignin, userMiddleware } = require("../common-middleware");
const router = require("express").Router();

router.post("/addOrder", requireSignin, userMiddleware, addOrder);
router.get("/getOrders", requireSignin, userMiddleware, getOrders);

module.exports = router;
