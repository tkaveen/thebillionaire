const express = require("express");
const { requireSignin } = require("../../common-middleware");
const { signup, signin, signout } = require("../../controller/admin/auth");
// const user = require("../models/auth");
const router = express.Router();

router.post("/admin/signup", signup);

router.post("/admin/signin", signin);

router.post("/admin/signout", requireSignin, signout);

module.exports = router;
