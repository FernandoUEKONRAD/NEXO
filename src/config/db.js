const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DB conectada");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};