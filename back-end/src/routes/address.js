const express = require("express");
const router = express.Router();
const { requireSignin, userMiddleware } = require("../common-middleware/index");
const { addAddress, getAddress } = require("../controller/address");

router.post("/user/address/create", requireSignin, userMiddleware, addAddress);
router.post("/user/getAddress", requireSignin, userMiddleware, getAddress);

module.exports = router;
