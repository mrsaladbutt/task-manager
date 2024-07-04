import mongoose from 'mongoose';
const URI =
    'mongodb+srv://saladbutt:VUC2AdFjOZqFZazR@cluster0.mshe6ic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose
    .connect(URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error(err);
    });
