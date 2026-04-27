const express = require("express");
const app = express();

const { routes } = require("./index");

app.use(express.json());

app.use("/api/auth", routes.authRoutes);
app.use("/api/users", routes.userRoutes);
app.use("/api/events", routes.eventRoutes);
app.use("/api/communities", routes.communityRoutes);

module.exports = app;