const express = require('express');
const router = express.Router();
// Aquí importarás el controlador de auth cuando lo crees
// const authController = require('../controllers/auth.controller');

// Registro de usuario
router.post('/register', (req, res) => res.send('Registro de usuario'));

// Login
router.post('/login', (req, res) => res.send('Login de usuario'));

module.exports = router;