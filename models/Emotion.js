const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const EmotionSchema = new Schema({
  chat_partner_id: {
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  emo1: {
    type: Number,
    dafualt: 0
  },
  emo1: {
    type: Number,
    dafualt: 0
  },
  emo2: {
    type: Number,
    dafualt: 0
  },
  emo3: {
    type: Number,
    dafualt: 0
  },
  emo4: {
    type: Number,
    dafualt: 0
  },
  emo5: {
    type: Number,
    dafualt: 0
  },
  emo6: {
    type: Number,
    dafualt: 0
  }
});

module.exports = router;
