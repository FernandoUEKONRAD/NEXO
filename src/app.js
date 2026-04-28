const express = require('express');
const cors = require('cors');

// CAMBIO AQUÍ: Debe tener el ".routes" para que coincida con tu archivo
const authRoutes = require('./routes/auth.routes'); 
const communityRoutes = require('./routes/community.routes'); // <- AGREGAR

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/auth', authRoutes); // 2. Conectar las rutas con un prefijo
app.use('/api/community', communityRoutes); // <- AGREGAR

app.get('/', (req, res) => res.send('API de Nexo funcionando 🚀'));

module.exports = app;