const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const eventRoutes = require('./routes/event.routes'); // <-- NUEVO

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes); // <-- NUEVO

app.get('/', (req, res) => res.send('API de Nexo funcionando 🚀'));

module.exports = app;