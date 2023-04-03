const workoutData = require('../seed_data/workoutData');
// const userworkoutData = require("../seed_data/userworkoutData");

exports.seed = function (knex) {
  return knex("workouts")
    .del()
    .then(function () {
      return knex("workouts").insert(workoutData);
    })
    // .then(() => {
    //   return knex("userworkout").insert(userworkoutData);
    // });
};
