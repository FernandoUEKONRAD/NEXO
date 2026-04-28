const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');
const protect = require('../middleware/authMiddleware');

router.post('/', protect, eventController.crearEvento);
router.get('/', protect, eventController.obtenerEventos);
router.put('/:id', protect, eventController.actualizarEvento);
router.delete('/:id', protect, eventController.eliminarEvento);

module.exports = router;