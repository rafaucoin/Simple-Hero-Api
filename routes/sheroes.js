const express = require("express");
const router = express.Router();
const hero = require("../models/hero");
const mongoose = require("mongoose");

//GET ALL HEROS
router.get("/", async (req, res) => {
  try {
    const post = await hero.find();
    res.json(post);
  } catch (error) {
    res.json(error);
  }
});
//TO SUBMIT A HERO
router.post("/", async (req, res) => {
  const post = new hero({
    Name: req.body.Name,
    Gender: req.body.Gender,
    Strength: req.body.Strength,
    Speed: req.body.Speed,
    intelligence: req.body.intelligence,
  });
  try {
    const savedHero = await post.save();
    res.json(savedHero);
  } catch (error) {
    res.json({ message: error });
  }
});
//GET A SPECIIC HERO BY AN ID

router.get("/:heroId", async (req, res) => {
  try {
    const selectedHero = await hero.findById(req.params.heroId);
    res.json(selectedHero);
  } catch (error) {
    res.json(req.params.heroId);
  }
});
//DELETE A SPECIFIC HERO

router.delete("/:heroId", async (req, res) => {
  try {
    const deleteHero = await hero.remove({ _id: req.params.heroId });
    res.send(req.params.heroId);
  } catch (error) {
    res.json(req.params.heroId);
  }
});

//UPDATE A HERO

router.patch("/:heroId", async (req, res) => {
  try {
    const deleteHero = await hero.patch();
    res.json(req.params.heroId);
    console.log("success");
  } catch (error) {
    res.json(req.params.heroId);
  }
});

module.exports = router;
