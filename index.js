const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require('./routes/userRoute');
const workoutRoutes = require("./routes/workoutRoute");
const mondayWorkoutRoutes = require("./routes/mondayRoute")
const tuesdayWorkoutRoutes = require("./routes/tuesdayRoute")
const wednesdayWorkoutRoutes = require("./routes/wednesdayRoute")
const thursdayWorkoutRoutes = require("./routes/thursdayRoute")
const fridayWorkoutRoutes = require("./routes/fridayRoute")
const saturdayWorkoutRoutes = require("./routes/saturdayRoute")
const sundayWorkoutRoutes = require("./routes/sundayRoute")

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/workout", workoutRoutes);
app.use("/monday", mondayWorkoutRoutes);
app.use("/tuesday", tuesdayWorkoutRoutes);
app.use("/wednesday", wednesdayWorkoutRoutes);
app.use("/thursday", thursdayWorkoutRoutes);
app.use("/friday", fridayWorkoutRoutes);
app.use("/saturday", saturdayWorkoutRoutes);
app.use("/sunday", sundayWorkoutRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});