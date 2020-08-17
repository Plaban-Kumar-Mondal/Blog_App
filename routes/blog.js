const express = require("express");
const router = require("router");
const { createBlog } = require("../controllers/blog");

// Create route for blog
router.post("/blog/create/:userId", createBlog);

// Read route for blog

// Update route for blog

// Delete route for blog

module.exports = router;
