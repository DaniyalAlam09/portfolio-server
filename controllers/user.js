const User = require("../models/user");

exports.createUser = async (req, res, next) => {
  try {
    const newUserData = {
      email: req.body.email,
    };
    const newUser = await User.create(newUserData);
    return res.status(200).json({
      success: true,
      uers: newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};