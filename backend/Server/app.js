const express = require("express");
const morgan = require("morgan");
const schedule = require('node-schedule');
const colors = require("colors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const { deleteCFP, fetchAndStoreEvents } = require("../Controllers/cfpController");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `MongoDB server connected to ${mongoose.connection.host}`.bgCyan.black
    );
  } catch (error) {
    console.log(`MongoDB server issue: ${error}`.bgRed.black);
  }
};

connectDB();

deleteCFP();
fetchAndStoreEvents();

const job = schedule.scheduleJob('0 2 * * *', function(){
  deleteCFP();
  fetchAndStoreEvents();
})


app.use("/api/v1/public", require("../Api-Routes/publicRoutes"));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(
    `server is running in ${process.env.DEV_MODE} mode on port ${process.env.PORT}`
      .bgGreen.bgWhite
  );
});
