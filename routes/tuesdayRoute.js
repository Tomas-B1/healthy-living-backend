const router = require("express").Router();
const tuesdayController = require("../Controllers/tuesdayController");

router.route("/")
.get(tuesdayController.index)
.post(tuesdayController.addSingleItem)

module.exports = router;