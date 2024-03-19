const { app } = require("./index");
const PORT = 3000;
const mongoose = require("mongoose");

//Connect to the database and start the server

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Connected!");
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Cannot be connected due to => ", err);
  });
