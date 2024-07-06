// emailTemplates.js
exports.generateEmailTemplate = (fullName) => {
  return `<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>Thank You for Contacting Us - Elev8Lift</title>
      <style>
          body {
              background-color: #f4f4f4;
              font-family: Arial, sans-serif;
              font-size: 16px;
              line-height: 1.6;
              color: #333333;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 40px auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              text-align: center;
          }
          .header {
              background-color: #1F2937;
              color: #ffffff;
              padding: 10px;
              border-radius: 8px 8px 0 0;
          }
          .header img {
              max-width: 100px;
              margin-bottom: 10px;
          }
          .header h1 {
              margin: 0;
              font-size: 24px;
          }
          .body {
              padding: 20px;
          }
          .body p {
              margin: 10px 0;
          }
          .cta {
              display: inline-block;
              padding: 10px 20px;
              background-color: #007bff;
              color: #ffffff;
              text-decoration: none;
              border-radius: 5px;
              font-size: 16px;
              font-weight: bold;
              margin-top: 20px;
          }
          .cta:hover {
              background-color: #0056b3;
          }
          .support {
              margin-top: 20px;
              font-size: 14px;
              color: #777777;
          }
          .support a {
              color: #007bff;
              text-decoration: none;
          }
          .support a:hover {
              text-decoration: underline;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <img src="https://www.elev8lift.in/assets/logo-Do9kJqSL.webp" alt="Elev8Lift Logo">
              <h1>Thank You for Reaching Out!</h1>
          </div>
          <div class="body">
              <p>Dear ${fullName},</p>
              <p>Thank you for contacting Elev8Lift! We appreciate your interest and will get back to you as soon as possible.</p>
              <p>In the meantime, feel free to browse our website or contact us directly for immediate assistance.</p>
              <a href="https://www.elev8lift.in" class="cta">Visit Our Website</a>
          </div>
          <div class="support">
              <p>If you have any further questions or need immediate assistance, please feel free to reach out to us at 
              <a href="mailto:${process.env.USER}">${process.env.USER}</a>. We are here to help!</p>
          </div>
      </div>
  </body>
  </html>`;
}

exports.generateInquiryEmailTemplate = (fullName, email, mobileNo, message) => {
  return `<!DOCTYPE html>
  <html>
  <head>
      <meta charset="UTF-8">
      <title>New Contact Form Submission - Elev8Lift</title>
      <style>
          body {
              background-color: #f4f4f4;
              font-family: Arial, sans-serif;
              font-size: 16px;
              line-height: 1.6;
              color: #333333;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 40px auto;
              padding: 20px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              text-align: left;
          }
          .header {
              background-color: #007bff;
              color: #ffffff;
              padding: 10px;
              border-radius: 8px 8px 0 0;
              text-align: center;
          }
          .header img {
              max-width: 100px;
              margin-bottom: 10px;
          }
          .header h1 {
              margin: 0;
              font-size: 24px;
          }
          .body {
              padding: 20px;
          }
          .body p {
              margin: 10px 0;
          }
          .support {
              margin-top: 20px;
              font-size: 14px;
              color: #777777;
          }
          .support a {
              color: #007bff;
              text-decoration: none;
          }
          .support a:hover {
              text-decoration: underline;
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <img src="https://www.elev8lift.in/assets/logo-Do9kJqSL.webp" alt="Elev8Lift Logo">
              <h1>New Contact Form Submission</h1>
          </div>
          <div class="body">
              <p>You have a new contact form submission from:</p>
              <p><strong>Full Name:</strong> ${fullName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Mobile No:</strong> ${mobileNo}</p>
              <p><strong>Message:</strong> ${message}</p>
          </div>
      </div>
  </body>
  </html>`;
}
