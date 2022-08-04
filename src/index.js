import express from 'express';
import mongoose from 'mongoose';
import route from './routes/route.js';

const app = express();

app.use(express.json());

app.use('/', route);

mongoose.connect("mongodb://localhost:27017/tempdb")
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(error => {
        console.log('Error connecting to MongoDB', error);
    });

app.listen(8000, () => {
    console.log(`Server running`);
});