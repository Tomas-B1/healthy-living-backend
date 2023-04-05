const router = require("express").Router();
const saturdayController = require("../Controllers/saturdayController");

router.route("/")
.get(saturdayController.index)
.post(saturdayController.addSingleItem)

module.exports = router;