const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
    knex("workouts")
      .select(
        "userworkouts.id",
        "userworkouts.name",
        "userworkouts.description",
        "userworkouts.product_img",
        "userworkouts.muscle",
        "userworkouts.difficulty"
      )
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(500).send(`Error retrieving workouts ${err}`)
      );
  };

exports.singleProduct = (req, res) => {
    knex("workouts")
      .where({ id: req.params.id })
      .then((workouts) => {
        if (workouts.length === 0) {
          return res.status(404).json({
            message: `Unable to find workout with id: ${req.params.id}`,
          });
        }
  
        res.json(workouts[0]);
      })
      .catch((error) => {
        return res.status(500).json({
          message: "There was an issue with the request",
          error,
        });
      });
  };