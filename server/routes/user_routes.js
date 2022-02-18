const express = require('express');
const router = express.Router();

const {
    auth,
    signup,
    login
} = require("../controllers/user_ctrl");

router.get("/auth", auth);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;