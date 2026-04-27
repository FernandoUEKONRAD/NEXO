const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const verifyToken = require("./validate_token");

router.post("/", verifyToken, async (req, res) => {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get("/", verifyToken, async (req, res) => {
  try {
    const { user, community } = req.query;

    let filtro = {};

    if (user) filtro.asistentes = user;
    if (community) filtro.comunidad = community;

    const eventos = await Event.find(filtro);
    res.json(eventos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});