require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


console.log("Mongo URI:", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Import user routes
const userRoutes = require("./routes/userRoutes"); // Importing userRoutes.js
app.use("/api", userRoutes); // Setting up route to use userRoutes.js

// POST route to receive data
app.post("/api/users", (req, res) => {
    const userData = req.body;
    console.log("Received data:", userData, "from server.js"); // Log with custom message
    // Aap yahan data ko save karne ka process add kar sakte hain
    res.status(201).json({ message: "User data received", user: userData });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));