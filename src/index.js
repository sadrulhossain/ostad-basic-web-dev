import express from 'express';
import dotenv from 'dotenv';
import conn from './config/db.js';
import routes from './routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Database connection
conn();

// Routes
app.use('/api', routes);

// Health check endpoint
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Email Verification API is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});