const Sendbird = require("sendbird");
const keys = require("../config/keys");

const sb = new Sendbird({
  appId: keys.appID
});

sb.connect(
  keys.superuserID,
  function(user, error) {
    if (error) {
      console.log(error);
    }
  }
);

module.exports = sb;
