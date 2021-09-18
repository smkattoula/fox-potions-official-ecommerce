const products = require("./_data/products");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

// Load env variables
require("dotenv").config();

// Load models
const Product = require("./models/productModel");

connectDB();

const importData = async () => {
  try {
    await Product.create(products);
    console.log("Data Imported...");
    process.exit();
  } catch (error) {
    console.error(error.message);
  }
};

const deleteData = async () => {
  try {
    await Product.deleteMany();
    console.log("Data Destroyed...");
    process.exit();
  } catch (error) {
    console.error(error.message);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
