// backend/models/User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    rollNo:{
        type: Number,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
