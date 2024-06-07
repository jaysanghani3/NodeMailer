const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

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
    text: `You have a new contact form submission from:
        
        Full Name: ${fullName}
        Email: ${email}
        Mobile No: ${mobileNo}
        Message: ${message}
        `,
  };

  try {
    // Send email to the recipient
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully to recipient");

    // Email options for the user response
    const userMailOptions = {
      from: process.env.USER, // your email
      to: email, // user's email
      subject: "Thank you for contacting us",
      text: `Dear ${fullName},
            
            Thank you for reaching out. We have received your message and will get back to you shortly.
            
            Best regards,
            Your Company
            `,
    };

    // Send email to the user
    await transporter.sendMail(userMailOptions);
    console.log("Response email sent successfully to user");

    // Send success response to the client
    res.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    // Send error response to the client
    res.status(500).json({ success: false, message: "Failed to send emails", error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
