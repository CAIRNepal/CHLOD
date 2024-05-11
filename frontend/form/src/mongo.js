const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/LoginForm")
    .then(() => {
        console.log('mongoose connected');
    })
    .catch((e) => {
        console.log('failed');
    });

// Define the schema
const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensure uniqueness of email addresses
    },
    password: {
        type: String,
        required: true
    }
});

// Create and export the model
const LogInCollection = mongoose.model('LogInCollection', logInSchema);
module.exports = LogInCollection;
