const router = require("express").Router();
const { controllers } = require("../index");

router.post("/register", controllers.authController.register);
router.post("/login", controllers.authController.login);

module.exports = router;