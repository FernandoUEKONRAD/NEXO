const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');

// Crear comunidad
router.post('/community', communityController.crearComunidad);

// Listar comunidades
router.get('/community', communityController.obtenerComunidades);

// Editar comunidad
router.put('/community/:id', communityController.actualizarComunidad);

// Eliminar comunidad
router.delete('/community/:id', communityController.eliminarComunidad);

module.exports = router;