const express = require("express");
const { requireSignin, adminMiddleware } = require("../common-middleware");
const router = express.Router();
const { addCategory, getCategories } = require("../controller/category");

router.post("/category/create", requireSignin, adminMiddleware, addCategory);
router.get("/category/getcategory", getCategories);

module.exports = router;
