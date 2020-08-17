const Blog = require("../models/Blog");

// method for params
exports.getBlogById = (req, res, next, id) => {
  Blog.findById(id).exec((err, blog) => {
    if (err || !blog) {
      return res.status(400).json({
        error: "No blog was found in DB!",
      });
    }
    req.blog = blog;
    next();
  });
};

// create blog controller
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

// get blog controller
exports.getBlog = (req, res) => {
  return res.json(req.blog);
};

// get all blogs controller
exports.getAllBlog = (req, res) => {
  Blog.find()
    .sort({ date: -1 })
    .exec((err, blogs) => {
      if (err) {
        return res.status(400).json({
          error: "No Blogs found",
        });
      }
      res.json(blogs);
    });
};

// update blog controller
exports.updateBlog = (req, res) => {
  const updatedBlog = req.body;

  Blog.findByIdAndUpdate(req.blog._id, updatedBlog, (err, updated_Blog) => {
    if (err) {
      return res.status(400).json({
        err,
      });
    }
    return res.json(updated_Blog);
  });
};

// Delete blog controller
exports.deleteBlog = (req, res) => {
  Blog.findByIdAndRemove(req.blog._id, (err, msg) => {
    if (err) {
      return res.json({
        error: err,
      });
    }
    return res.json({
      message: "Blog successfully deleted",
    });
  });
};
