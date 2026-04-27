const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try {
        const { nombre, email, password } = req.body;

        // 1. Verificar si el usuario ya existe
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ msg: 'El usuario ya existe' });

        // 2. Crear el nuevo usuario
        user = new User({ nombre, email, password });

        // 3. Encriptar la contraseña
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // 4. Guardar en MongoDB Atlas
        await user.save();

        res.status(201).json({ msg: 'Usuario registrado con éxito en Nexo' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al registrar usuario');
    }
};

exports.login = async (req, res) => {
    // Aquí irá la lógica de comparar contraseñas y generar el Token (JWT)
    res.send('Login funcionando (lógica en desarrollo)');
};