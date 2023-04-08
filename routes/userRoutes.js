const express = require("express");
const { registerUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login",);

router.get("/current", (req, res) => {
  res.json({ message: "Current user infomation!" });
});

module.exports = router;