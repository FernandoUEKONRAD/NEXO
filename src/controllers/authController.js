const User = require('../models/User');
const bcrypt = require('bcryptjs');

// 1. REGISTRO
exports.register = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'El usuario ya existe' });

        user = new User({ nombre, email, password });
        await user.save();
        res.status(201).json({ msg: 'Usuario registrado con éxito en Nexo' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar usuario');
    }
};

// 2. LOGIN (En desarrollo)
exports.login = async (req, res) => {
    res.send('Login funcionando (lógica en desarrollo)');
};

// 3. CONSULTAR TODOS LOS USUARIOS
exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await User.find().select('-password');
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ msg: "Error al consultar usuarios" });
    }
};

// ACTUALIZAR USUARIO
exports.actualizarUsuario = async (req, res) => {
    try {
        const { id } = req.params; // Obtenemos el ID de la URL
        const datosNuevos = req.body; // Obtenemos los campos a cambiar (nombre, rol, etc.)

        // Buscamos y actualizamos
        const usuarioActualizado = await User.findByIdAndUpdate(
            id, 
            datosNuevos, 
            { new: true, runValidators: true } // 'new: true' devuelve el usuario ya cambiado
        );

        if (!usuarioActualizado) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        res.json({ 
            msg: "Usuario actualizado con éxito en Nexo", 
            usuario: usuarioActualizado 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al actualizar el usuario" });
    }
};

// 5. ELIMINAR USUARIO
exports.eliminarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const usuarioEliminado = await User.findByIdAndDelete(id);

        if (!usuarioEliminado) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        res.json({ msg: "Usuario eliminado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Error al eliminar usuario" });
    }
};