const router = require("express").Router();
const workoutController = require("../controllers/workoutController");

router.route("/").get(workoutController.index)

router.route("/:id").get(workoutController.singleworkout);

module.exports = router;