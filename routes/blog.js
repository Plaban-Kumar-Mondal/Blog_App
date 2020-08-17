const express = require("express");
const router = express.Router();
const { createBlog } = require("../controllers/blog");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");

// params
router.param("userId", getUserById);

// Create route for blog
router.post("/blog/create/:userId", isSignedIn, isAuthenticated, createBlog);

// Read route for blog
router.get("/blog/:blogid");

// Update route for blog

// Delete route for blog

module.exports = router;
