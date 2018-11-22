const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// @route   POST api/emotion/recommend_emoji
// @desc    recommend emoji on given message.
//          req:(message), res:(emotion)
// @access  Public
router.post("/recommend_emoji", (req, res) => {
  console.log(req.body);
  res.json({
    foo: "bar"
  });
});

// @route   POST api/emotion/reply_emotion
// @desc    predict the emotion of reply for given message
//          req:(message to be sent, prior messages) res:(emotion of reply)
// @access  Public
router.post("/reply_emotion", (req, res) => {
  console.log(req.body);
  res.json({
    foo: "bar"
  });
});

// @route   POST api/emotion/emotion_distribution
// @desc    show the emotion distribution that chat partner has felt toward user
//          req:(chat partner id, user id) res:(emotion distribution)
// @access  Public
router.post("/emotion_distribution", (req, res) => {
  console.log(req.body);
  res.json({
    foo: "bar"
  });
});

// @route   POST api/emotion/update_distribution
// @desc    update the emotion distribution that chat partner has felt toward user
//          req:(chat partner id, user id, emotion) res:()
// @access  Public
router.post("/update_distribution", (req, res) => {
  console.log(req.body);
  res.json({
    foo: "bar"
  });
});

// @route   POST api/emotion/create_channel
// @desc    create the object of Emotion model
//          req:(chat partner id, user id) res:()
// @access  Public
router.post("/update_distribution", (req, res) => {
  console.log(req.body);
  res.json({
    foo: "bar"
  });
});

module.exports = router;
