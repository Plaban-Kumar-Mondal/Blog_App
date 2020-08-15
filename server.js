const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// DataBase Connection
const databaseURI = process.env.DATABASE
  ? process.env.DATABASE
  : "mongodb://localhost:27017/blog-app";
mongoose
  .connect(databaseURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED!");
  });

const PORT = process.env.PORT ? process.env.PORT : 5000;
app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
