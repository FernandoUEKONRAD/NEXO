const User = require('../models/User');
const bcrypt = require('bcryptjs');

// 1. REGISTRO
exports.register = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;

        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'El usuario ya existe' });

        user = new User({ nombre, email, password });
        
        // El hashing se hace en el modelo (User.js), así que solo guardamos
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

// 3. CONSULTAR USUARIOS
exports.obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await User.find().select('-password');
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ msg: "Error al consultar usuarios" });
    }
};