const express = require("express");
const cors = require("cors");
require("dotenv").config();
const userRoutes = require('./routes/userRoute');
const workoutRoutes = require("./routes/workoutRoute");
const scheduleRoutes = require("./routes/scheduleRoute");
const mealRoutes = require("./routes/mealRoute")

const app = express();

const PORT = process.env.PORT || 8000;

const cors=require("cors");
 const corsOptions ={
       origin:'*', 
       credentials:true, //access-control-allow-credentials:true
        optionSuccessStatus:200,
 }

 app.use(cors(corsOptions)) 

// app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/workout", workoutRoutes);
app.use("/schedule", scheduleRoutes);
app.use("/meals", mealRoutes)

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});