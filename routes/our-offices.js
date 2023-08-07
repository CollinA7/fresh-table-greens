const express = require("express");
const router = express.Router();

// GET our offices
router.get("/", function (req, res, next) {
  res.render("our-offices", { title: "Offices of Fresh Table" });
});

module.exports = router;
