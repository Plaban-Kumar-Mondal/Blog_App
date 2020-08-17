const express = require("express");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUser } = require("../controllers/user");
const router = express.Router();

// params
router.param("userId", getUserById);

// show user
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

module.exports = router;
