const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
    knex("tuesday")
      .select(
        "tuesday.id",
        "tuesday.name",
        "tuesday.description",
        "tuesday.product_img",
        "tuesday.muscle",
        "tuesday.difficulty"
      )
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(500).send(`Error retrieving workouts ${err}`)
      );
  };

  exports.addSingleItem = (req, res) => {
    knex("tuesday")
      .insert(req.body)
      .then((workouts) => {
        if (workouts.length === 0) {
          return res.status(404).json({
            message: `Nothing in tuesday`,
          });
        }
        res.json(workouts);
      })
      .catch((error) => {
        if (error.code === "ER_DUP_ENTRY") {
          return res.status(500).json({
          message: "The item is already stored",
          error,
          });
        }
  
        return res.status(500).json({
          message: "There was an issue with the request",
          error,
        });
      });
  };