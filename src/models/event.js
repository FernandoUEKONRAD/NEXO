const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  fecha: {
    type: Date,
    required: true
  },
  ubicacion: String,
  asistentes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],
  probabilidadInasistencia: {
    type: Number,
    default: 0
  },
  comunidad: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Community"
  }
}, { timestamps: true });

module.exports = mongoose.model("Event", eventSchema);