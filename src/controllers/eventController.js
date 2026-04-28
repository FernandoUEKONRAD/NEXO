const Event = require('../models/Event');

exports.crearEvento = async (req, res) => {
    try {
        const { titulo, fecha, ubicacion, asistentes, probabilidadInasistencia, comunidad } = req.body;

        const evento = new Event({
            titulo,
            fecha,
            ubicacion,
            asistentes,
            probabilidadInasistencia,
            comunidad,
            creador: req.usuario.id  // viene del middleware JWT
        });

        await evento.save();
        res.status(201).json({ msg: 'Evento creado con éxito en Nexo', evento });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al crear el evento' });
    }
};

exports.obtenerEventos = async (req, res) => {
    try {
        const { usuarioId, comunidadId } = req.query;

        let filtro = {};
        if (usuarioId) filtro.asistentes = usuarioId;
        if (comunidadId) filtro.comunidad = comunidadId;

        const eventos = await Event.find(filtro)
            .populate('creador', 'nombre email')
            .populate('asistentes', 'nombre email');

        res.json(eventos);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al consultar los eventos' });
    }
};

exports.actualizarEvento = async (req, res) => {
    try {
        const { id } = req.params;
        const datosNuevos = req.body;

        const eventoActualizado = await Event.findByIdAndUpdate(
            id,
            datosNuevos,
            { new: true, runValidators: true }
        );

        if (!eventoActualizado) {
            return res.status(404).json({ msg: 'Evento no encontrado' });
        }

        res.json({ msg: 'Evento actualizado con éxito en Nexo', evento: eventoActualizado });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al actualizar el evento' });
    }
};