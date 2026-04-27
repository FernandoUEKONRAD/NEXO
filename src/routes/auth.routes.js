const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller'); // Descomenta esto

// Registro de usuario - Ahora llama a la función del controlador
router.post('/register', authController.register);

// Login - Ahora llama a la función del controlador
router.post('/login', authController.login);

module.exports = router;