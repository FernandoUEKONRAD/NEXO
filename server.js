require("dotenv").config();

const { app, db } = require("./src");

db();

app.listen(process.env.PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${process.env.PORT}`);
});