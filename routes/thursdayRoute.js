const router = require("express").Router();
const thursdayController = require("../Controllers/thursdayController");

router.route("/")
.get(thursdayController.index)
.post(thursdayController.addSingleItem)

module.exports = router;