const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// 1. Definición (fíjate que empieza en minúscula)
const userSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    rol: { type: String, enum: ['miembro', 'organizador', 'admin'], default: 'miembro' },
    fechaRegistro: { type: Date, default: Date.now }
});

// 2. Middleware (aquí debe coincidir con la variable de arriba)
userSchema.pre('save', async function () { 
    if (!this.isModified('password')) return; 

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// 3. Exportación (usamos la misma variable)
module.exports = mongoose.model('User', userSchema);