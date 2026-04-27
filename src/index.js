const app = require("./app");
const db = require("./config/db");

const authController = require("./controllers/auth.controller");
const userController = require("./controllers/user.controller");
const eventController = require("./controllers/event.controller");

const User = require("./models/User");
const Event = require("./models/Event");

const auth = require("./auth");
const role = require("./role");

const authRoutes = require("./routes/auth.routes");
const userRoutes = require("./routes/user.routes");
const eventRoutes = require("./routes/event.routes");

module.exports = {
  app,
  db,

  controllers: {
    authController,
    userController,
    eventController,
  },

  models: {
    User,
    Event,
  },

  auth,
  role,

  routes: {
    authRoutes,
    userRoutes,
    eventRoutes,
  }
};