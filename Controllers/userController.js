const knex = require("knex")(require("../knexfile"));

exports.index = (_req, res) => {
    knex("users")
      .select(
        "users.id",
        "users.name",
      )
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(500).send(`Error retrieving user ${err}`)
      );
  };