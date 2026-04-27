const router = require("express").Router();
const { controllers, auth, role } = require("../index");

router.get("/", auth, role("admin"), controllers.userController.getAll);

module.exports = router;