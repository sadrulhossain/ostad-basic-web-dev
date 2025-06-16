import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conn from './config/db.js';
import routes from './routes.js';

dotenv.config();

conn();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});