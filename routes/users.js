const express = require("express");
const router = express.Router();
const { login, register, current } = require("../controllers/users");
/* GET users listing. */
router.post("/login", function (req, res, next) {
  res.send("login request",login);
});

router.get("/register", function (req, res, next) {
  res.send("register requset",register);
});

router.post("/current", function (req, res, next) {
  res.send("current request",current);
});

module.exports = router;
