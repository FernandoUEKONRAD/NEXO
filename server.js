const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// 🔹 Middleware
app.use(express.json());

// 🔹 Rutas
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/events", require("./routes/event.routes"));

// 🔹 Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/reuniones", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ Conectado a MongoDB"))
.catch(err => console.error("❌ Error de conexión:", err));

// 🔹 Ruta base (opcional pero útil)
app.get("/", (req, res) => {
  res.send("API de Reuniones funcionando 🚀");
});

// 🔹 Manejo básico de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

// 🔹 Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🔥 Servidor corriendo en http://localhost:${PORT}`);
});