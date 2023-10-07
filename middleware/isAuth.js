// middleware/authMiddleware.js
const User = require("../models/user");
const jwt = require('jsonwebtoken');
const config = require("config");

exports.isAuthenticated = async (req, res, next) => {
  // Get the token from the request headers
  const { token } = req.cookies;

  // Check if token is missing
  if (!token) {
    return res.status(401).json({ message: 'Access denied. Missing token.' });
  }

  try {
    // Verify and decode the token
    const user = jwt.verify(token, config.get("jwtPrivateKey"));
    // Attach the user data to the request object
    req.user = await User.findById(user._id);

    // Continue to the next middleware
    next();
  } catch (error) {
    // Invalid token
    res.status(401).json({ message: 'Access denied. Invalid token.' });
  }
};


