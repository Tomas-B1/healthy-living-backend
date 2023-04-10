const workoutData = require('../seed_data/workoutData');
const mealData = require('../seed_data/mealData')

exports.seed = function (knex) {
  return knex("workouts")
    .del()
    .then(function () {
      return knex("workouts").insert(workoutData);
    })
    .then(() => {
      return knex("meals").insert(mealData);
    })
};

