require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../src/models/User');

const NOMBRE = 'Sasha Ubaque Echeverry';
const EMAIL = 'sasha.ubaque@nexo.com';
const PASSWORD = 'SashaAdmin123';

async function makeAdmin() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Conectado a MongoDB');

    let user = await User.findOne({ nombre: { $regex: NOMBRE, $options: 'i' } })
        || await User.findOne({ email: EMAIL });

    if (!user) {
        console.log(`Usuario no encontrado. Creando cuenta para "${NOMBRE}"...`);
        user = new User({ nombre: NOMBRE, email: EMAIL, password: PASSWORD, rol: 'admin' });
        await user.save();
        console.log(`✓ Cuenta creada: ${user.email} | rol: ${user.rol}`);
        console.log(`  Contraseña temporal: ${PASSWORD}`);
    } else {
        user.rol = 'admin';
        await user.save();
        console.log(`✓ ${user.nombre} (${user.email}) ahora tiene rol: ${user.rol}`);
    }

    await mongoose.disconnect();
}

makeAdmin().catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
});
