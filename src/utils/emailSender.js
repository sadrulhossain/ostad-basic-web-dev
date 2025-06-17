import nodemailer from 'nodemailer';
import email from '../config/email.js';

const transporter = nodemailer.createTransport({
    service: email.service,
    host: email.host,
    port: email.port,
    secure: email.secure,
    auth: {
        user: email.auth.user,
        pass: email.auth.pass,
    },
});

export const sendVerificationEmail = async (receiver, verificationLink) => {
    const options = {
        from: email.from,
        to: receiver,
        subject: 'Email Verification',
        html: `
      <p>Please click the following link to verify your reciever:</p>
      <a href="${verificationLink}">${verificationLink}</a>
      <p>This link will expire in 1 hour.</p>
    `,
    };

    try {
        await transporter.sendMail(options);
        console.log(`Verification email sent to ${receiver}`);
    } catch (error) {
        console.error('Error sending verification email:', error);
        throw new Error('Failed to send verification email');
    }
};