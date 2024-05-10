const express = require('express');

const bodyParser = require('body-parser');
const connectDB = require('./config/db');
require('dotenv').config();

// Connect to MongoDB
connectDB();

const app = express();
const cors = require('cors');

app.use(cors()); // Enable CORS for all routes
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Routes
const userRoutes = require('./routes/userRoutes');
const playlistRoutes = require('./routes/playlistRoutes');

app.use('/api/users', userRoutes);
app.use('/api/playlist', playlistRoutes);

app.get('/', function (req, res) {
    console.log("Hello World!");
    res.send('Hello World!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
