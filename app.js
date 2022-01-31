const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();

//MIDDLEWARES
app.use(bodyParser.json());
//IMPORT ROUTES

const heroroute = require("./routes/sheroes");

app.use("/sheroes", heroroute);

app.get("/", (req, res) => {
  res.send("we're home");
});

//CONNECT TO DB

mongoose.connect(process.env.DB_CONNECTION, () => console.log("connected"));

//TO LISTEN
app.listen(3000);
