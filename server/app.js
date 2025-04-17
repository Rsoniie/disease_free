import 'dotenv/config';
import express from 'express'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDb from './db/dbConnection.js';


import questionRoutes from './routes/questionsRoutes.js';
import userRoutes from './routes/userRoutes.js';
import todoRoutes from './routes/todoRoutes.js';
import appRoutes from './routes/appRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
await connectDb();


app.use('/api/user', userRoutes);
app.use('/api/todo', todoRoutes);
app.use('/api/appn', appRoutes);
app.use('/api/questions', questionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
} )