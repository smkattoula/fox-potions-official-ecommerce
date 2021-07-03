const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const productJSON = require("../_data/products.json");

exports.getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// exports.getProduct = asyncHandler(async (req,res) => {
//   const product = await productJSON
// })
