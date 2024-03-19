const express = require("express");
const { Product } = require("../models/product.model");
const { getProducts, getProductById, updateProduct, deleteProduct, addProducts } = require("../controllers/product.controller");
const router = express.Router();
//get data from the database

router.get("/", getProducts);

//get product by its id
router.get("/:id", getProductById);

//update a product by id
router.patch("/:id", updateProduct);
  
//delete a product by Id
router.delete("/:id", deleteProduct);

//add product data to the database
router.post("/", addProducts);

module.exports = router ;
