import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    token: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '1h', // Token expires after 1 hour
    },
});

const verificationTokenModel = mongoose.model('VerificationToken', schema);

export default verificationTokenModel;