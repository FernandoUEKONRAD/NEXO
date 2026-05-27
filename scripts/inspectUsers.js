require('dotenv').config();
const mongoose = require('mongoose');

async function inspect() {
    await mongoose.connect(process.env.MONGO_URI);
    const db = mongoose.connection.db;

    const collections = await db.listCollections().toArray();
    console.log('Colecciones:', collections.map(c => c.name));

    for (const col of collections) {
        const docs = await db.collection(col.name).find({}).toArray();
        console.log(`\n--- ${col.name} (${docs.length} docs) ---`);
        docs.forEach(d => console.log(JSON.stringify(d)));
    }

    await mongoose.disconnect();
}

inspect().catch(err => {
    console.error('Error:', err.message);
    process.exit(1);
});
