const dotenv = require('dotenv');
dotenv.config();


const mongoose = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;
// console.log(process.env.JWT_SECRET);
// console.log(process.env.PORT);
// console.log(MONGO_URI);

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://manish8176:Manish8176@cluster0.rrcvi2i.mongodb.net/movie-library-new?retryWrites=true&w=majority&appName=Cluster0");
        // await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
