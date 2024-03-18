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

  module.exports = {getProducts}