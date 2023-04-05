const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require('./routes/userRoute');
const workoutRoutes = require("./routes/workoutRoute");
const mondayWorkoutRoutes = require("./routes/mondayRoute")

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/workout", workoutRoutes);
app.use("/monday", mondayWorkoutRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});