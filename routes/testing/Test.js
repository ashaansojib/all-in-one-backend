const express = require("express");
const { getTestData } = require("../../controllers/testing/Test");
const router = express.Router();

router.route("/").get(getTestData);
module.exports = router;