const router = require("express").Router();
const sundayController = require("../Controllers/sundayController");

router.route("/")
.get(sundayController.index)
.post(sundayController.addSingleItem)

module.exports = router;