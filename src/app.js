const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para recibir JSON en el body

// Rutas (se irán agregando según los módulos de los 3 integrantes)
app.get('/', (req, res) => res.send('API de Nexo funcionando 🚀'));

module.exports = app;