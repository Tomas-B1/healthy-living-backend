const router = require("express").Router();
const workoutController = require("../Controllers/workoutController");

router.route("/").get(workoutController.index)

router.route("/:id").get(workoutController.singleworkout);

module.exports = router;