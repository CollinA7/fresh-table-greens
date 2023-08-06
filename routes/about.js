const express = require("express");
const router = express.Router();

// GET about page for fresh table greens
router.get("/", function (req, res, next) {
  res.render("about", { title: "About Fresh Table Greens" });
});

module.exports = router;
