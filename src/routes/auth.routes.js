const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// Registro y Login
router.post('/register', authController.register);
router.post('/login', authController.login);

// CRUD de Usuarios
router.get('/users', protect, authController.obtenerUsuarios);
router.put('/users/:id', protect, adminOnly, authController.actualizarUsuario);
router.delete('/users/:id', protect, adminOnly, authController.eliminarUsuario);

module.exports = router;