const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const { generateEmailTemplate, generateInquiryEmailTemplate } = require("./emailtemplets");
dotenv.config();
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
    to: process.env.USER,
    subject: "New Contact Form Submission",
    html: generateInquiryEmailTemplate(fullName, email, mobileNo, message),
  };
  try {
    await transporter.sendMail(mailOptions);
    const userMailOptions = {
      from: process.env.USER,
      to: email,
      subject: "Thank you for contacting us",
      html: generateEmailTemplate(fullName),
    };

    await transporter.sendMail(userMailOptions);

    res.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Please, try again",
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
