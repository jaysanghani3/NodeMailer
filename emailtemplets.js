const generateEmailTemplate = (fullName) => {
  return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Us - Elev8Lift</title>
    </head>
    <body style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #333333; margin: 0; padding: 0; background-color: #1A1717;">
        <div style="max-width: 600px; margin: 40px auto; padding: 20px; background-color: #1A1717; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); text-align: center;">
            <div style="background-color: #007bff; color: #ffffff; padding: 10px; border-radius: 8px 8px 0 0;">
                <img src="https://lh3.googleusercontent.com/p/AF1QipMXo12MKiuaKPSlKr5-QevhFFAPsE9RjS7Fzyc=s680-w680-h510" alt="Elev8Lift Logo" style="max-width: 100px; margin-bottom: 10px; background-color: white;">
                <h1 style="margin: 0; font-size: 24px;">Thank You for Reaching Out!</h1>
            </div>
            <div style="padding: 20px; background-color: #1A1717; color: #ffffff;">
                <p>Dear ${fullName},</p>
                <p>Thank you for contacting Elev8Lift! We appreciate your interest and will get back to you as soon as possible.</p>
                <p>In the meantime, feel free to browse our website or contact us directly for immediate assistance.</p>
                <a href="https://www.elev8lift.in" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold; margin-top: 20px;">Visit Our Website</a>
            </div>
            <div style="font-size: 14px; color: #ffffff;">
                <p>If you have any further questions or need immediate assistance, please feel free to reach out to us at 
                <a href="mailto:elev8liftmail@gmail.com" style="color: #007bff; text-decoration: none;">elev8liftmail@gmail.com</a>. We are here to help!</p>
            </div>
        </div>
    </body>
    </html>`;
};

const generateInquiryEmailTemplate = (fullName, email, mobileNo, message) => {
  return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission - Elev8Lift</title>
    </head>
    <body style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.6; color: #ffffff; margin: 0; padding: 0; background-color: #f6f6f6;">
        <div style="max-width: 600px; margin: 40px auto; padding: 20px; background-color: #1A1717; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); text-align: left;">
            <div style="background-color: #007bff;border:1px solid #ffffff; color: #ffffff; padding: 10px; border-radius: 8px 8px 0 0; text-align: center;">
                <img src="https://lh3.googleusercontent.com/p/AF1QipMXo12MKiuaKPSlKr5-QevhFFAPsE9RjS7Fzyc=s680-w680-h510" alt="Elev8Lift Logo" style="max-width: 100px; margin-bottom: 10px; background-color: white;">
                <h1 style="margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            <div style="padding: 20px;color: #ffffff;border:1px solid #ffffff;">
                <p>You have a new contact form submission from:</p>
                <p><strong>Full Name:</strong> ${fullName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile No:</strong> ${mobileNo}</p>
                <p><strong>Message:</strong> ${message}</p>
            </div>
        </div>
    </body>
    </html>`;
};

module.exports = {
  generateEmailTemplate,
  generateInquiryEmailTemplate,
};
