import express from 'express'

const app = express();
app.use(express.json());

app.use('/', (req, res) => {
    res.send("Server is running fine");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
} )