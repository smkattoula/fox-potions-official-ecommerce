const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "uploads/" }).single("demo_image");
const { connectDB } = require("./config/db");
const path = require("path");
const app = express();

// Load env variables
require("dotenv").config();

// Connect DB
connectDB();

// Enable CORS
app.use(cors());

// Body-Parser
app.use(express.json());

app.use("/api/products", require("./routes/productRoutes"));

app.get("/", (req, res) => {
  res.send("API running...");
});

app.post("/image", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(400).send("Something went wrong!");
    }
    res.send(req.file);
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
