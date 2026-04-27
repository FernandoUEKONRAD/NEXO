const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Registro y Login
router.post('/register', authController.register);
router.post('/login', authController.login);

// CRUD de Usuarios
router.get('/users', authController.obtenerUsuarios); // Consultar todos
router.delete('/users/:id', authController.eliminarUsuario); // <--- ESTA ES LA RUTA
// Ruta para actualizar usuario por ID
router.put('/users/:id', authController.actualizarUsuario);

module.exports = router;