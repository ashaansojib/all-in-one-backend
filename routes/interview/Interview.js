const express = require("express");
const {
  allInterViewQuestion,
  addInterviewQuestion,
  removeInterviewQuestion,
} = require("../../controllers/interview/Interview");
const router = express.Router();

router.route("/").get(allInterViewQuestion);
router.route("/").post(addInterviewQuestion);
router.route("/:id").delete(removeInterviewQuestion);
module.exports = router;
