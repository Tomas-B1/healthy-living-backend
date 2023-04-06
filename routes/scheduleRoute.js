const router = require("express").Router();
const scheduleController = require("../Controllers/scheduleController");

router.route("/")
.post(scheduleController.addSingleItem)

router.route("/:id")
.get(scheduleController.index)

router.route("/:id/:day")
.get(scheduleController.dayOfWeek)

module.exports = router;