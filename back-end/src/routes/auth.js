const express = require("express");
const { signup, signin, resetPassword } = require("../controller/auth");
const router = express.Router();
const { requireSignin, userMiddleware } = require("../common-middleware");

router.post("/signup", signup);

router.post("/signin", signin);

router.post("/resetPassword", resetPassword);

// router.post("/profile", requireSignin, (req, res) => {
//   res.status(200).json({ user: "profile" });
// });

module.exports = router;
