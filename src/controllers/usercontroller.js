const User = require("../models/User");

exports.getAll = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

exports.getById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

exports.update = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(user);
};

exports.delete = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ msg: "Usuario eliminado" });
};