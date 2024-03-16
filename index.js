const express = require("express");
const { Product } = require("./models/product.model.js");
const app = express();
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("[HOME]");
  res.json({
    name: "Rana",
  });
});

//get data from the database

app.get("/api/products", (req, res) => {
  try {
    Product.find({}).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get product by its id
app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//add product data to the database
app.post("/api/products", (req, res) => {
  try {
    Product.create(req.body).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = { app };
