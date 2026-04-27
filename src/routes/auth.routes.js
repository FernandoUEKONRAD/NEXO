const express = require('express');
const router = express.Router();

// CAMBIO: Quitamos el punto para que diga authController
const authController = require('../controllers/authController');

// Registro de usuario - Ahora llama a la función del controlador
router.post('/register', authController.register);

// Login - Ahora llama a la función del controlador
router.post('/login', authController.login);

// Ruta para consultar usuarios
router.get('/users', authController.obtenerUsuarios);

module.exports = router;