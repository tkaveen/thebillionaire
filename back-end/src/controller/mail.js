const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

// const transporter = nodemailer.createTransport(
//   sendgridTransport({
//     auth: {
//       // api_key: "theBillionaire",
//       user: "theshankaveen2@gmail.com",
//       pass: "yourpassword",
//     },
//   })
// );

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'theshankaveen2@gmail.com',
    pass: 'adoko123456'
  }
});

exports.sendEmail = (req, res) => {
  const { email } = req.body;

  var emailobj = {
    to: "kaveenliyanaarachchi@gmail.com",
    from: "theshankaveen2@gmail.com",
    subject: "New Contact - Message",
    html: `<h3>Email: ${email}</h3> </br>`,
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
