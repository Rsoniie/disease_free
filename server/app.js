import 'dotenv/config';
import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDb from './db/dbConnection.js';

import userRoutes from './routes/userRoutes.js'

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
await connectDb();


app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
} )