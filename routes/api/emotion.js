const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const sendbird = require("../../config/chat_connect");
const SendBird = require("sendbird");
const fs = require("fs");
const request = require("request");
const keys = require("../../config/keys");

/*sendbird.connect(
  "ExampleUser1",
  function(user, error) {
    if (error) {
      console.log(error);
    }
  }
);

const channelUrl =
  "sendbird_group_channel_90314232_4ec2a359cfd5f781ecff7f3b07324ec9c1d77162";

sendbird.GroupChannel.getChannel(channelUrl, function(groupChannel, error) {
  if (error) {
    console.log(error);
    return;
  } else {
    groupChannel.getPreviousMessagesByID(
      (messageId = 1987895877),
      (isInclusive = true),
      (prevResultSize = 1),
      (shouldReverse = false),
      (messageType = "MESG"),
      (customType = ""),
      function(messages, error) {
        if (error) {
          console.log(error);
          return;
        } else {
          const message = messages[0].message;
          fs.writeFile("temp.txt", message, (err, data) => {
            if (err) console.log(err);
            else console.log("Successfully write to file");
          });
        }
      }
    );
  }
});
*/
/*const fs = require("fs");

var sb = SendBird.getInstance();
var applicationUserListQuery = sb.createApplicationUserListQuery();
applicationUserListQuery.next(function(users, error) {
  console.log("2222");
  if (error) {
    return;
  }
  console.log(users);
});

fs.writeFile("temp.txt", "Helloee", (err, data) => {
  if (err) console.log(err);
  console.log("Successfully write to file");
});
*/

router.get("/", (req, res) => {
  res.json({
    foo: "bar"
  });
});

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
// @desc    predict the emotion of reply for given messagjjjjjjjjjjjjue
//          req:(user_id, chat_room_url, message) res:(emotion of reply)
// @access  Public
router.post("/reply_emotion", (req, res) => {
  console.log("obtain request of POST reply_emotion");
  const user_id = req.body.user_id;
  const chat_room_url = req.body.chat_room_url;
  const message = req.body.message;
  fs.writeFile("temp.txt", message, (err, data) => {
    if (err) console.log(err);
    else {
      request(keys.deeplearning_server_ip_and_port, function(
        error,
        response,
        body
      ) {
        console.log("error:", error); // Print the error if one occurred
        console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
        console.log("body:", body); // Print the HTML for the Google homepage.
        const _emotion = body;
        res.json({
          emotion: parseInt(_emotion)
        });
      });
    }
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

