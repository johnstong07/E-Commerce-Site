// Add this near your other imports
// TODO: Import user routes
const userRoutes = require('.routes/userRoutes')

// TODO: Import required modules
// 1. Import express
const express = require('express')
// 2. Import mongoose
const mongoose = require('mongoose')
// 3. Import dotenv to load environment variables
// TODO: Load environment variables
// Hint: Use dotenv.config()
require('dotenv').config();

// TODO: Import user routes
const userRoutes = require('./routes/user'); // Adjust the path based on your project structure

// TODO: Initialize Express app
// Hint: const app = express();
const app = express()
// TODO: Set up middleware
// 1. Express JSON parser for request bodies
app.use(express.json());
// 2. Serve static files from the 'public' directory
app.use(express.static('public'));


// TODO: Connect to MongoDB
// Hint: Use mongoose.connect with your MONGODB_URI
// Make sure to handle the connection promise with .then() and .catch()
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// Add this after your middleware setup
// TODO: Use the user routes with the path '/api'
app.use('/api', userRoutes)

// TODO: Define routes
// For now, just create a simple root route that responds with a welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the MongoDb app!');
});

// TODO: Start the server
// Use the PORT from your environment variables or default to 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});