const { Product } = require("../models/product.model");

//get products function
const getProducts = (req, res) => {
    try {
      Product.find({}).then((data) => {
        res.status(200).json(data);
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  //get product by ID
  const getProductById = async (req, res) => {
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
}

  module.exports = {getProducts, getProductById}