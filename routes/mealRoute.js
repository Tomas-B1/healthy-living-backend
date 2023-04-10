const router = require("express").Router();
const mealController = require("../Controllers/mealController");

router.route("/").get(mealController.index)

router.route("/:id").get(mealController.singlemeal);

module.exports = router;