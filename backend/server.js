require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


console.log("Mongo URI:", process.env.MONGO_URI);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Import user routes
const userRoutes = require("./routes/userRoutes");
app.use("/api", userRoutes);


app.post("/api/users", (req, res) => {
    const userData = req.body;
    console.log("Received data:", userData, "from server.js");
    
    res.status(201).json({ message: "User data received", user: userData });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));