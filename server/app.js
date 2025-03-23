import express from 'express'
import cors from 'cors';
import connectDb from './db/dbConnection.js';

const app = express();
app.use(express.json());
app.use(cors());

await connectDb();

app.use('/api/user', )

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
} )