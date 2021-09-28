const products = require("./_data/products");
const users = require("./_data/users");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");

// Load env variables
require("dotenv").config();

// Load models
const Product = require("./models/productModel");
const Order = require("./models/orderModel");
const User = require("./models/userModel");

connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);

    const adminUser = createdUser[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    console.log("Data Imported...");
    process.exit();
  } catch (error) {
    console.error(error.message);
  }
};

const deleteData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Deleted...");
    process.exit();
  } catch (error) {
    console.error(error.message);
  }
};

if (process.argv[2] === "-d") {
  deleteData();
} else {
  importData();
}
