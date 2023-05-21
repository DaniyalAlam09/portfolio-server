const express = require("express");
const router = express.Router();
const { createUser, login, viewUsers } = require("../../controllers/user");

router.post("/register", createUser);
router.post("/login", login);
router.get("/allusers", viewUsers);

module.exports = router;
