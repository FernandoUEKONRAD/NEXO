const Community = require('../models/Community');

// Crear comunidad
exports.crearComunidad = async (req, res) => {
    try {
        const { nombre, descripcion, creadorId } = req.body;
        if (!nombre || !descripcion || !creadorId) {
            return res.status(400).json({ msg: 'nombre, descripcion y creadorId son obligatorios' });
        }
        const nuevaComunidad = new Community({ nombre, descripcion, creador: creadorId, miembros: [creadorId] });
        await nuevaComunidad.save();
        res.status(201).json({ msg: 'Comunidad creada con éxito en Nexo', comunidad: nuevaComunidad });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al crear la comunidad' });
    }
};

// Listar comunidades
exports.obtenerComunidades = async (req, res) => {
    try {
        const comunidades = await Community.find()
            .populate('creador', 'nombre email')
            .populate('miembros', 'nombre email');
        res.json(comunidades);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al listar las comunidades' });
    }
};

// Editar comunidad
exports.actualizarComunidad = async (req, res) => {
    try {
        const comunidadActualizada = await Community.findByIdAndUpdate(
            req.params.id, req.body, { new: true, runValidators: true }
        );
        if (!comunidadActualizada) return res.status(404).json({ msg: 'Comunidad no encontrada' });
        res.json({ msg: 'Comunidad actualizada con éxito', comunidad: comunidadActualizada });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al actualizar la comunidad' });
    }
};

// Eliminar comunidad
exports.eliminarComunidad = async (req, res) => {
    try {
        const comunidadEliminada = await Community.findByIdAndDelete(req.params.id);
        if (!comunidadEliminada) return res.status(404).json({ msg: 'Comunidad no encontrada' });
        res.json({ msg: 'Comunidad eliminada correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al eliminar la comunidad' });
    }
};

// Abandonar comunidad
exports.abandonarComunidad = async (req, res) => {
    try {
        const { userId } = req.body;
        if (!userId) return res.status(400).json({ msg: 'userId es obligatorio' });
        const comunidad = await Community.findByIdAndUpdate(
            req.params.id, { $pull: { miembros: userId } }, { new: true }
        );
        if (!comunidad) return res.status(404).json({ msg: 'Comunidad no encontrada' });
        res.json({ msg: 'Has abandonado la comunidad correctamente', comunidad });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al abandonar la comunidad' });
    }
};