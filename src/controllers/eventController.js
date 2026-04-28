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
