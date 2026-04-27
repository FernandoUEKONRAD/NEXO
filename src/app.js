// src/app.js
// src/app.js
const express = require('express');
const cors = require('cors');

// CAMBIO AQUÍ: Debe tener el ".routes" para que coincida con tu archivo
const authRoutes = require('./routes/auth.routes'); 

const app = express();

// ... resto de tu código (middlewares y app.use)

// ... resto del código

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes); // 2. Conectar las rutas con un prefijo

app.get('/', (req, res) => res.send('API de Nexo funcionando 🚀'));

module.exports = app;