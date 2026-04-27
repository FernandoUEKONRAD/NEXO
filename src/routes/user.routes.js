const router = require("express").Router();
const { controllers, auth, role } = require("../index");

router.get("/", auth, role("admin"), controllers.userController.getAll);
router.get("/:id", auth, controllers.userController.getById);
router.put("/:id", auth, controllers.userController.update);
router.delete("/:id", auth, role("admin"), controllers.userController.delete);

module.exports = router;