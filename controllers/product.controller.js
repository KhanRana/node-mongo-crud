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

//update a product
const updateProduct = async(req, res) => {
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
}

//delete a product
const deleteProduct = async (req, res) => {
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
}

  module.exports = {getProducts, getProductById, updateProduct, deleteProduct}