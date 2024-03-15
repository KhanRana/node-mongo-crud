const express = require("express");
const app = express();
require("dotenv").config();


app.get('/', (req, res) => {
    console.log("[HOME]");
    res.json({
        "name": "Rana"
    })
})


module.exports = { app }