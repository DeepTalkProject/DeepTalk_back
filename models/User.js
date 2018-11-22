const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  chat_partner_emotion_distribution: [
    {
      chat_partner_ID: {
        type: String
      },
      emotion1: {
        type: Number
      },
      emotion2: {
        type: Number
      },
      emotion3: {
        type: Number
      },
      emotion4: {
        type: Number
      },
      emotion5: {
        type: Number
      },
      emotion6: {
        type: Number
      }
    }
  ]
});

module.exports = User = mongoose.model("users", UserSchema);
