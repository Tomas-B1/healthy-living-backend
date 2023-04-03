const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
    knex("workouts")
      .select(
        "workouts.id",
        "workouts.name",
        "workouts.description",
        "workouts.product_img",
        "workouts.muscle",
        "workouts.difficulty"
      )
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(500).send(`Error retrieving workouts ${err}`)
      );
  };

exports.singleworkout = (req, res) => {
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