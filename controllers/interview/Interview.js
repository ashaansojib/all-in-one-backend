const asyncHandler = require("../../middleware/async");
const interViewSchema = require("../../models/interview/Interview");

// get all queries
exports.allInterViewQuestion = asyncHandler(async (req, res, next) => {
  const questions = await interViewSchema.find();
  res
    .status(200)
    .json({ success: true, data: questions, count: questions.length });
});
// create a post
exports.addInterviewQuestion = asyncHandler(async (req, res, next) => {
  const question = req.body;
  const added = await interViewSchema.create(question);
  res.status(201).json({ success: true, data: added });
});
// remove a questions
exports.removeInterviewQuestion = asyncHandler(async (req, res, next) => {
  const id = req.params.id;
  const removed = await interViewSchema.deleteOne({ _id: id });
  res.status(200).json({ success: true, data: removed });
});
