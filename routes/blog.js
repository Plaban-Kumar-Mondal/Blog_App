const express = require("express");
const router = express.Router();
const { createBlog, getBlog, getBlogById } = require("../controllers/blog");
const { isSignedIn, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

// params
router.param("userId", getUserById);
router.param("blogId", getBlogById);

// Create route for blog
router.post("/blog/create/:userId", isSignedIn, isAuthenticated, createBlog);

// Read route for blog
router.get("/blog/:blogId", isSignedIn, getBlog);

// Update route for blog

// Delete route for blog

module.exports = router;
