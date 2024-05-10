const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://manish8176:Manish8176@cluster0.rrcvi2i.mongodb.net/movie-library-new?retryWrites=true&w=majority&appName=Cluster0");
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
