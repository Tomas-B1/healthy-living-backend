const router = require("express").Router();
const wednesdayController = require("../Controllers/wednesdayController");

router.route("/")
.get(wednesdayController.index)
.post(wednesdayController.addSingleItem)

module.exports = router;