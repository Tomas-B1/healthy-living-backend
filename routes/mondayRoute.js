const router = require("express").Router();
const mondayController = require("../Controllers/mondayController");

router.route("/")
.get(mondayController.index)
.post(mondayController.addSingleItem)

module.exports = router;