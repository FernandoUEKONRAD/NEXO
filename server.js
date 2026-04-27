const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

console.log("--- DEBUG DE RUTA ---");
console.log("Buscando .env en:", path.resolve(__dirname, '.env'));
console.log("MONGO_URI detectada:", process.env.MONGO_URI ? "SÍ ✅" : "NO ❌");

const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 3000;

// Conectar BD e iniciar servidor
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Servidor Nexo corriendo en http://localhost:${PORT}`);
    });
});