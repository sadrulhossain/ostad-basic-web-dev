import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const conn = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('DB connected successfully');
    } catch (e) {
        console.error('DB connection error:', e);
        process.exit(1);
    }
};

export default conn;