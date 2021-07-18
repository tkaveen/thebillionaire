const express = require("express");
const { requireSignin, userMiddleware } = require("../common-middleware");
const { addReview } = require("../controller/review");
const router = express.Router();

router.post("/review/addReview", requireSignin, userMiddleware, addReview);

module.exports = router;
