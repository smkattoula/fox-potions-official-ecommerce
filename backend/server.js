const express = require("express");
const axios = require("axios");
const { connectDB } = require("./db");
const app = express();

const Product = require("./models/productModel");

require("dotenv").config();

// Connect DB
connectDB();

// Body-Parser
app.use(express.json());

app.get("/api/products", async (req, res) => {
  //   Product.find({}).then((item) => res.json(item));

  const product = await Product.find({});

  res.json(product);
});

app.get("/", (req, res) => {
  res.send("API running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${5000}`));
