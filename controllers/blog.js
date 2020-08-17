const Blog = require("../models/Blog");

// create controller
exports.createBlog = (req, res) => {
  const blog = new Blog(req.body);

  blog.save((err, blog) => {
    if (err) {
      return res.status(400).json({
        message: "Not able to save the blog",
        error: err,
      });
    }
    res.json({ blog });
  });
};
