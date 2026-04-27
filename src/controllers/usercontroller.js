const User = require("../models/user");

exports.getAll = async (req, res) => {
  const users = await User.find();
  res.json(users);
};