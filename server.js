import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/send-contact', async (req, res) => {
  const { name, phone, email, enquiryType, message } = req.body;

  try {
    // Configure nodemailer transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECEIVER_EMAIL || process.env.GMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; padding: 30px 20px; background-color: #f8f9fa; border-radius: 12px;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h2 style="color: #111827; margin: 0; font-size: 24px; font-weight: 700;">New Contact Request</h2>
            <p style="color: #6b7280; margin-top: 6px; font-size: 14px;">You have received a new message from Zenvyra.</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 30px; border-radius: 12px; border: 1px solid #e5e7eb; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 130px; font-size: 14px; font-weight: 500;">Name</td>
                <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: 500;">Email</td>
                <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: 500;">Phone</td>
                <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px;">${phone || '<span style="color: #9ca3af; font-style: italic;">Not provided</span>'}</td>
              </tr>
              <tr>
                <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; font-weight: 500;">Enquiry Type</td>
                <td style="padding: 14px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-size: 15px;">
                  <span style="background-color: #eff6ff; color: #2563eb; padding: 4px 10px; border-radius: 20px; font-size: 12px; font-weight: 600;">${enquiryType}</span>
                </td>
              </tr>
            </table>
            
            <div style="margin-top: 28px;">
              <h3 style="color: #6b7280; font-size: 13px; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Message</h3>
              <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message || '<span style="color: #9ca3af; font-style: italic;">No message provided</span>'}</div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 24px; color: #9ca3af; font-size: 12px;">
            <p>This email was sent automatically from your website contact form.</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
