const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://durga:subha321@ac-we9augc-shard-00-00.pm2tfls.mongodb.net:27017,ac-we9augc-shard-00-01.pm2tfls.mongodb.net:27017,ac-we9augc-shard-00-02.pm2tfls.mongodb.net:27017/portfolio?ssl=true&replicaSet=atlas-4roxyj-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch((error) => console.log(error));

// Model
const Contact = mongoose.model("Contact", {
    name: String,
    email: String,
    message: String
});

// Routes
app.get("/", (req, res) => {
    res.send("Backend is working");
});

app.get("/api", (req, res) => {
    res.json({ message: "API working" });
});

// Save contact data to MongoDB
app.post("/contact", async (req, res) => {
    try {
        const newMessage = new Contact(req.body);

        await newMessage.save();

        console.log("Message Saved");

        res.send("Message saved successfully");
    } catch (error) {
        console.log(error);

        res.status(500).send("Error saving message");
    }
});
// Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});
