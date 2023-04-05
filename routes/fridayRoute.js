const router = require("express").Router();
const fridayController = require("../Controllers/fridayController");

router.route("/")
.get(fridayController.index)
.post(fridayController.addSingleItem)

module.exports = router;