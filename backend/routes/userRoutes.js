// backend/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/user"); // User model import

// Route to save user name
router.post("/users", async (req, res) => {
    try {
        // Receiving the name from the request body
        const newUser = new User({ name: req.body.name });

        // Console log to confirm name received in userRoutes.js
        console.log("Received Name in userRoutes.js:", req.body.name);

        // Saving the user data in MongoDB
        const savedUser = await newUser.save();

        // Sending saved data as a response
        res.status(201).json(savedUser);
    } catch (error) {
        // Error handling if saving fails
        console.error("Error in userRoutes.js while saving user:", error);
        res.status(500).json({ message: "Error saving user", error });
    }
});

module.exports = router;