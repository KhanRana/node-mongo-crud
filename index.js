const express = require("express");
const { Product } = require("./models/product.model.js");
const app = express();
require("dotenv").config();

app.use(express.json());

app.get('/', (req, res) => {
    console.log("[HOME]");
    res.json({
        "name": "Rana"
    })
})

app.post("/api/products", (req, res) => {
    try {
        Product.create(req.body).then((data) => {
            res.status(200).json(data)
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = { app }