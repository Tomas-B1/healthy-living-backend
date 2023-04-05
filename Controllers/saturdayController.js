const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
    knex("saturday")
      .select(
        "saturday.id",
        "saturday.name",
        "saturday.description",
        "saturday.product_img",
        "saturday.muscle",
        "saturday.difficulty"
      )
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(500).send(`Error retrieving workouts ${err}`)
      );
  };

  exports.addSingleItem = (req, res) => {
    knex("saturday")
      .insert(req.body)
      .then((workouts) => {
        if (workouts.length === 0) {
          return res.status(404).json({
            message: `Nothing in Saturday`,
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