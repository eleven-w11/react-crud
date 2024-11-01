const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");

router.post("/users", async (req, res) => {
    try {
        const { name, rollNo, email, password } = req.body;

        // Check if user already exists with same name, rollNo, or email
        const existingUser = await User.findOne({
            $or: [{ name }, { rollNo }, { email }]
        });

        if (existingUser) {
            return res.status(400).json({ message: "User with same name, rollNo, or email already exists" });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create new user
        const newUser = new User({
            name,
            rollNo,
            email,
            password: hashedPassword
        });

        console.log("Received Name, Roll No, Email in userRoutes.js:", name, rollNo, email, password);

        // Save the new user in MongoDB
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        console.error("Error in userRoutes.js while saving user:", error);
        res.status(500).json({ message: "Error saving user", error });
    }
});

module.exports = router;