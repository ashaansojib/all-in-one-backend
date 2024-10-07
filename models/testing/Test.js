const mongoose = require("mongoose");
const TestModel = new mongoose.Schema({
    title: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
});
module.exports = mongoose.model("TestSchema", TestModel);