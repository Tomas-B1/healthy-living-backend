const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");

exports.index = (_req, res) => {
    console.log(_req.params.id)
    knex("schedule")
      .join("workouts", "schedule.workout_id", "=", "workouts.id")
        .where({user_id: _req.params.id})
        .select(
          "workouts.name",
          "workouts.muscle",
          "workouts.difficulty",
          "workouts.product_img",
          "workouts.description",
          "schedule.DayOfWeeK"
        )
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(500).send(`Error retrieving schedule ${err}`)
      );
  };

  exports.dayOfWeek = (_req, res) => {
    console.log(_req.params.day)
    knex("schedule")
      .join("workouts", "schedule.workout_id", "=", "workouts.id")
        .where({dayOfWeek: _req.params.day})
        .where({user_id: _req.params.id})
        .select(
          "workouts.name",
          "workouts.muscle",
          "workouts.difficulty",
          "workouts.product_img",
          "workouts.description",
          "schedule.DayOfWeeK"
        )
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) =>
        res.status(500).send(`Error retrieving schedule ${err}`)
      );
  };

  exports.addSingleItem = (req, res) => {
    const newWorkout = req.body;
    newWorkout.id = uuidv4()
    console.log(newWorkout)
    knex ("schedule")
      .insert(newWorkout)
      .then(() => {
          return res.status(201).json(newWorkout);
      })
      .catch((error) => {
        if (error.code === "ER_DUP_ENTRY") {
          return res.status(500).json({
          message: "The item is already stored",
          error,
          });
        }})
      }

  