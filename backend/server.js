const express = require("express");
const cors = require("cors");
const multer = require("multer");
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started in ${process.env.NODE_ENV} mode on port: ${PORT}`)
);
