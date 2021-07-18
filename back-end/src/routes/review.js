const express = require("express");
const { requireSignin, userMiddleware } = require("../common-middleware");
const { addReview, getReview } = require("../controller/review");
const router = express.Router();

router.post("/review/addReview", requireSignin, userMiddleware, addReview);
router.get("/review/getReview/:id", getReview);

module.exports = router;
