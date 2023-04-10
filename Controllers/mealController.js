const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
    knex("meals")
      .select(
        "meals.id",
        "meals.name",
        "meals.directions",
        "meals.ingredient1",
        "meals.ingredient2",
        "meals.ingredient3",
        "meals.ingredient4",
        "meals.ingredient5",
        "meals.ingredient6",
        "meals.ingredient7",
        "meals.ingredient8",
        "meals.product_img",
      )
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(500).send(`Error retrieving meal ${err}`)
      );
  };

exports.singlemeal = (req, res) => {
    knex("meals")
      .where({ id: req.params.id })
      .then((meals) => {
        if (meals.length === 0) {
          return res.status(404).json({
            message: `Unable to find meal with id: ${req.params.id}`,
          });
        }
  
        res.json(meals[0]);
      })
      .catch((error) => {
        return res.status(500).json({
          message: "There was an issue with the request",
          error,
        });
      });
  };