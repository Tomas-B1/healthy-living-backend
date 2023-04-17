const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require('./routes/userRoute');
const workoutRoutes = require("./routes/workoutRoute");
const scheduleRoutes = require("./routes/scheduleRoute");
const mealRoutes = require("./routes/mealRoute")

const app = express();

const PORT = process.env.PORT || 8000;

const corsConf = {
  origin: "*",
  methods: "GET,PUT,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204
}

app.use(cors(corsConf));

// app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/workout", workoutRoutes);
app.use("/schedule", scheduleRoutes);
app.use("/meals", mealRoutes)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});