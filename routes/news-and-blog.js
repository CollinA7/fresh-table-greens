const express = require("express");
const router = express.Router();

//
router.get("/", function (req, res, next) {
  res.render("news-and-blog", { title: "Fresh news" });
});

module.exports = router;
