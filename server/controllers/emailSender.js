
import nodemailer from 'nodemailer';

async function sendFeedback(subject, text, userEmail, message) {
    console.log(process.env.ORGANIZATION_EMAIL, process.env.ORGANIZATION_EMAIL_PASS, userEmail)


    const transporter = nodemailer.createTransport({
        host: 'smtp.ionos.co.uk', // IONOS SMTP server
        port: 465, // The port for sending emails // Can use other providers like Yahoo, Outlook, etc.
        // service: 'gmail',
        secure: true,
        auth: {
            user: process.env.ORGANIZATION_EMAIL,    // Your organization's email
            pass: process.env.ORGANIZATION_EMAIL_PASS // Your organization's email password
            //pass: pass // Your organization's email password
        }
    });

    // Email options
    const mailOptions = {
        from: process.env.ORGANIZATION_EMAIL,  // From the user's email (display purposes only)
        to: process.env.ORGANIZATION_EMAIL, // Your organization's email
        subject: `${subject}`,
        text: `${text}
      

      
      Message: 
      ${message}`,
        replyTo: userEmail
    };

    // Send the email
    let info = await transporter.sendMail(mailOptions);
    console.log(transporter, info)
    return info;
}

export const emailSender = async (req, res) => {
    const { name, phone, userEmail, message } = req.body;

    try {
        const info = await sendFeedback(name, phone, userEmail, message);
        res.status(200).json({ success: true, message: 'Feedback sent!', info });
    } catch (error) {
        console.error('Error sending feedback:', error);
        res.status(500).json({ success: false, message: 'Failed to send feedback.', error });
    }
}