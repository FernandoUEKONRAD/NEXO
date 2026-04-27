const Event = require("../models/Event");

exports.create = async (req, res) => {
  const event = new Event({ ...req.body, createdBy: req.usuario.id });
  await event.save();
  res.json(event);
};

exports.getAll = async (req, res) => {
  const events = await Event.find().populate("createdBy");
  res.json(events);
};

exports.getById = async (req, res) => {
  const event = await Event.findById(req.params.id);
  res.json(event);
};

exports.update = async (req, res) => {
  const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(event);
};

exports.delete = async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ msg: "Evento eliminado" });
};