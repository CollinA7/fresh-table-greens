const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("newsAndBlog", { title: "Fresh Table Greens News" });
});

module.exports = router;
