const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const config = require("config");
const email = config.get("email");
const password = config.get("password");

router.post("/", async (req, res) => {
  const output = `
          <p>You have a new contact request</p>
          <h3>Contact Details</h3>
          <ul>  
            <li>firstName: ${req.body.firstName}</li>
            <li>lastName: ${req.body.lastName}</li>
            <li>email: ${req.body.email}</li>
            <li>subject: ${req.body.subject}</li>
          </ul>
          <h3>message</h3>
          <p>${req.body.message}</p>
        `;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password
    }
  });

  let mailOptions = {
    from: email,
    to: "kudziemadzongwe6@gmail.com",
    subject: "Contact request",
    html: output
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      res.json("Thank you, your email has been sent");
      console.log("Email sent: " + info.response);
    }
  });
});

module.exports = router;
