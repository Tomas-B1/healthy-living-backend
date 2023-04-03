const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require('./routes/user-routes');
const workoutRoutes = require("./routes/workoutRoute");
const userworkoutRoutes = require("./routes/userworkoutRoute")

const app = express();

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/workout", workoutRoutes);
app.use("/userworkout", userworkoutRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});