const express = require('express');
const router = express.Router();

const {
    create
} = require("../controllers/name_ctrl");

router.post("/new", create);

module.exports = router;