import userModel from '../models/userModel.js';
import verificationTokenModel from '../models/verificationTokenModel.js';
import { v4 as uuidv4 } from 'uuid';
import { sendVerificationEmail } from '../utils/emailSender.js';

const verificationLink = (token) => `${process.env.BASE_URL}/api/auth/verify-email?token=${token}`;
const registerUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        // Create new user
        const user = new userModel({ email, password, isVerified: false });
        await user.save();

        // Generate verification token
        const token = uuidv4();
        const verificationToken = new verificationTokenModel({
            userId: user._id,
            token,
        });
        await verificationToken.save();

        // Send verification email
        await sendVerificationEmail(email, verificationLink(token));

        res.status(201).json({
            message: 'User registered successfully. Please check your email for verification.',
            userId: user._id,
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const verifyEmail = async (req, res) => {
    try {
        const { token } = req.query;

        // Find the verification token
        const verificationToken = await verificationTokenModel.findOne({ token });
        if (!verificationToken) {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        // Find the user
        const user = await userModel.findById(verificationToken.userId);
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        // Update user verification status
        user.isVerified = true;
        await user.save();

        // Delete the verification token
        await verificationTokenModel.deleteOne({ _id: verificationToken._id });

        res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
        console.error('Email verification error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const userController = { registerUser, verifyEmail };