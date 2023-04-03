const router = require("express").Router();
const userworkoutController = require("../controllers/userworkoutController");

router.route("/").get(userworkoutController.index)

module.exports = router;