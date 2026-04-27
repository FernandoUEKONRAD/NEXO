const router = require("express").Router();
const { controllers, auth } = require("../index");

router.post("/", auth, controllers.eventController.create);
router.get("/", controllers.eventController.getAll);
router.get("/:id", controllers.eventController.getById);
router.put("/:id", auth, controllers.eventController.update);
router.delete("/:id", auth, controllers.eventController.delete);

module.exports = router;