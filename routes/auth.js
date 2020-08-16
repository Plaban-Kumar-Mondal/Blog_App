const express = require("express");
const router = express.Router();
const { signout, signup } = require("../controllers/auth");
const { check } = require("express-validator");

router.post(
  "/signup",
  [
    check("name")
      .isLength({ min: 3 })
      .withMessage("User name must be 3 characters long"),
    check("email").isEmail().withMessage("Email should have valid pattern"),
    check("password")
      .isLength({ min: 5 })
      .withMessage("Password must have 5 characters")
      .matches(/\d/)
      .withMessage("Password must contain a number"),
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email").isEmail().withMessage("Email should have valid pattern"),
    check("password")
      .isLength({ min: 1 })
      .withMessage("Password is required")
      .matches(/\d/)
      .withMessage("Password must contain a number"),
  ],
  signup
);

router.get("/signout", signout);

module.exports = router;
