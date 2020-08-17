const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// Requiring Routes
const indexRoutes = require("./routes/index");
const authRoutes = require("./routes/auth");
const blogRoutes = require("./routes/blog");
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

// using middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

// using routes
app.use("/api", indexRoutes);
app.use("/api", authRoutes);
app.use("/api", blogRoutes);

const PORT = process.env.PORT ? process.env.PORT : 5000;
app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
