const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { generateEmailTemplate, generateInquiryEmailTemplate } = require("./emailtemplets.js");

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.post("/send", async (req, res) => {
  const { fullName, email, mobileNo, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.USER, // recipient email
    subject: "New Contact Form Submission",
    html: generateInquiryEmailTemplate(fullName, email, mobileNo, message),
  };

  try {
    await transporter.sendMail(mailOptions);

    const userMailOptions = {
      from: process.env.USER, // your email
      to: email, // user's email
      subject: "Thank you for contacting us",
      html: generateEmailTemplate(fullName),
    };

    // Send email to the user
    await transporter.sendMail(userMailOptions);

    // Send success response to the client
    res.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    // Send error response to the client
    res.status(500).json({ success: false, message: "Failed to send emails", error: error.message });
  }
});

app.listen(port, () => {
  console.log('Server running ');
});
