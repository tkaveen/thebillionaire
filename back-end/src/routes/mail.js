const express = require("express");
const { sendEmail } = require("../controller/mail");
const router = express.Router();

router.post("/mail/sendmail", sendEmail);

module.exports = router;