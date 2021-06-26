const { addOrder, getOrders, getOrder } = require("../controller/order");
const { requireSignin, userMiddleware } = require("../common-middleware");
const router = require("express").Router();

router.post("/addOrder", requireSignin, userMiddleware, addOrder);
router.get("/getOrders", requireSignin, userMiddleware, getOrders);
router.post("/getOrder", requireSignin, userMiddleware, getOrder);

module.exports = router;
