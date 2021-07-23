const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

const Email = "thebillionairepromotion@gmail.com";
const EmailPassword = "00204060808";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: Email,
    pass: EmailPassword,
  },
});

exports.sendEmail = (req, res) => {
  const { receiverMail } = req.body;

  var emailobj = {
    to: receiverMail,
    from: Email,
    subject: "Order Confirmation",
    html: `<h3>Dear Sir/Madam,</h3>
    <p>Thanks for being part of The Billionaire Family. you will receive your order soon.<br></br> <br></br> 
    You can track your orders through the order details page.</p> `,
  };

  try {
    transporter.sendMail(emailobj, function (err, res) {
      if (err) {
        console.log(err);
      }
      console.log(res);
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
