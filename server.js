const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb+srv://subha:durga321@cluster0.pm2tfls.mongodb.net/test?retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch((error) => console.log(error));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend is working");
});

app.get("/api", (req, res) => {
  res.json({ message: "API working" });
});

app.post("/contact", (req, res) => {
    console.log(req.body);
    res.send("Message received successfully");
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
