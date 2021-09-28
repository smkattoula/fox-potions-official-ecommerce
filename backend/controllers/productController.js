const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel");

// Description: Fetch all products
// Route: GET /api/products
// Access: Public
exports.getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// Description: Fetch a single product by ID
// Route: GET /api/products/:id
// Access: Public
exports.getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
