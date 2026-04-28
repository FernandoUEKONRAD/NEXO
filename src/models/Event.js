const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    fecha: { type: Date, required: true },
    ubicacion: { type: String, required: true },
    asistentes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    probabilidadInasistencia: { type: Number, default: 0, min: 0, max: 100 },
    creador: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    comunidad: { type: mongoose.Schema.Types.ObjectId, ref: 'Community' },
    estado: { type: String, enum: ['programado', 'en curso', 'finalizado', 'cancelado'], default: 'programado' },
    fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', eventSchema);