const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  email: {
    type: String,
  },
  username:{
    type: String,
  }, 
  password:{
    type: String,
  }
});

module.exports = mongoose.model("User", userSchema);
