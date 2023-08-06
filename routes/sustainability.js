const express = require("express");
const router = express.Router();

// sustainability page route
router.get("/", function (req, res, next) {
  res.render("sustainability", { title: "Our mission of sustainability" });
});

module.exports = router;
