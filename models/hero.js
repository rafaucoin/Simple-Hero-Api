const mongoose = require("mongoose");

const heroschema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Strength: {
    type: Number,
    required: true,
  },
  Speed: {
    type: Number,
    required: true,
  },
  intelligence: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("hero", heroschema);
