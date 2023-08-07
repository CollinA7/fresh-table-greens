const express = require("express");
const router = express.Router();

// GET products lists
router.get("/", function (req, res, next) {
  res.render("products", { title: "FTG products & services" });
});

module.exports = router;
