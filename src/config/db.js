const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // CORRECCIÓN: Quitamos el ")" que estaba después de MONGO_URI
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: 'Nexo' 
        });
        
        console.log(`✅ MongoDB Conectado: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error de conexión: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;