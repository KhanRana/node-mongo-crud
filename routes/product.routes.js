const express = require("express");
const { Product } = require("../models/product.model");
const router = express.Router();
//get data from the database

router.get("/", (req, res) => {
  try {
    Product.find({}).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//get product by its id
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update a product by id
router.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    Product.findById(id).then((data) => res.status(200).json(data));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//delete a product by Id
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    res.status(200).json({ message: "Product deleted successfully!" });
  } catch (error) {
    res.send(500).json({ message: error.message });
  }
});

//add product data to the database
router.post("/", (req, res) => {
  try {
    Product.create(req.body).then((data) => {
      res.status(200).json(data);
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router ;
