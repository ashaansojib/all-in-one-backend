const asyncHandler = require("../../middleware/async");
const TestModel = require("../testing/Test")
exports.getTestData = asyncHandler(async (req, res, next) => {
    // const data = await TestModel.find();
    res.status(200).json({ success: true, data: "Testing Backend server ok" })
})