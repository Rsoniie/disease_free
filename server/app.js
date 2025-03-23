import 'dotenv/config';
import express from 'express'
import cors from 'cors';
import connectDb from './db/dbConnection.js';

import userRoutes from './routes/userRoutes.js'

const app = express();
app.use(express.json());
app.use(cors());
await connectDb();

app.use('/api/user', userRoutes)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
} )