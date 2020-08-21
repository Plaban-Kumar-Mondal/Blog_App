const express = require("express");
const router = express.Router();
const {
  createBlog,
  getBlog,
  getBlogById,
  updateBlog,
  getAllBlog,
} = require("../controllers/blog");
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
router.put("/blog/:blogId/:userId", isSignedIn, isAuthenticated, updateBlog);

// Delete route for blog
router.delete("/blog/:blogId/:userId", isSignedIn, isAuthenticated);

//  GET ALL BLOGS
router.get("/blogs", getAllBlog);

module.exports = router;
