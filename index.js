const express = require("express");
const productRoutes = require("./routes/product.routes.js");
const app = express();
require("dotenv").config();

//add middleware for json and routing
app.use(express.json());
app.use("/api/products", productRoutes);

//welcome message
app.get("/", (req, res) => {
  console.log("[HOME]");
  res.json({
    message: "Welcome to your CRUD API!",
  });
});

module.exports = { app };
