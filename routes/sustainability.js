const express = require("express");
const router = express.Router();

// sustainability page route
router.get("/", function (req, res, next) {
  res.render("sustainability", { title: "our sustainability" });
});

module.exports = router;
