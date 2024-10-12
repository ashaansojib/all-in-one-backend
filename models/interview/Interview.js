const mongoose = require("mongoose");
const InterviewSchma = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a question name"],
  },
  category: {
    type: String,
  },
  bangla: {
    type: String,
  },
  enlish: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("interViewSchema", InterviewSchma);
