const express = require("express");
const productRoutes = require("./routes/product.routes.js");
const app = express();
require("dotenv").config();

app.use(express.json());
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  console.log("[HOME]");
  res.json({
    name: "Rana",
  });
});


module.exports = { app };
