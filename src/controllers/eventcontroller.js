const Event = require("../models/event");

exports.create = async (req, res) => {
  const event = new Event({ ...req.body, createdBy: req.usuario.id });
  await event.save();
  res.json(event);
};

exports.getAll = async (req, res) => {
  const events = await Event.find().populate("createdBy");
  res.json(events);
};