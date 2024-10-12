const mongoose = require("mongoose");
const ConnectDB = async () => {
  const conn = await mongoose.connect(process.env.Mongo_URI);
  console.log(`${conn.connection.host}`.blue);
};
module.exports = ConnectDB;
