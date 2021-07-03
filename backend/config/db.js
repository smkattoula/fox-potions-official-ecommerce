const mongoose = require("mongoose");

// Connect to MongoDB
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log("MongoDB successfully connected!");
  } catch (error) {
    console.error(error.message);
    throw new Error("MongoDB connection error...");
  }
};

module.exports = { connectDB };
