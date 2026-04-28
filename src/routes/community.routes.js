const express = require('express');
const router = express.Router();
const communityController = require('../controllers/communityController');

// Crear comunidad
router.post('/', communityController.crearComunidad);

// Listar comunidades
router.get('/', communityController.obtenerComunidades);

// Editar comunidad
router.put('/:id', communityController.actualizarComunidad);

// Eliminar comunidad
router.delete('/:id', communityController.eliminarComunidad);

module.exports = router;