const express = require("express");
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
    console.log(req.body);
    res.send(req.body);
})

module.exports = { app }