const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
    const { fullName, email, mobileNo, message } = req.body;

    // Create a transporter object
    const transporter = nodemailer.createTransport({
        service: 'gmail', // e.g., 'gmail'
        auth: {
            user: 'karanbhuva9861@gmail.com', 
            pass: 'eocx vzfs ovhm ctdq' 
        }
    });

    // Email options for the recipient
    const mailOptions = {
        from: email,
        to: 'karanbhuva9861@gmail.com', // recipient email
        subject: 'New Contact Form Submission',
        text: `You have a new contact form submission from:
        
        Full Name: ${fullName}
        Email: ${email}
        Mobile No: ${mobileNo}
        Message: ${message}
        `
    };

    try {
        // Send email to the recipient
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully to recipient');

        // Email options for the user response
        const userMailOptions = {
            from: 'karanbhuva9861@gmail.com', // your email
            to: email, // user's email
            subject: 'Thank you for contacting us',
            text: `Dear ${fullName},
            
            Thank you for reaching out. We have received your message and will get back to you shortly.
            
            Best regards,
            Your Company
            `
        };

        // Send email to the user
        await transporter.sendMail(userMailOptions);
        console.log('Response email sent successfully to user');

        res.json({ message: 'Form data received and emails sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending email', error });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
