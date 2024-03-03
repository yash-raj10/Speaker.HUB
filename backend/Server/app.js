const express = require("express");
const morgan = require("morgan");
const schedule = require('node-schedule');
const colors = require("colors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const Conference = require("../Models/ConferenceModel");
// const { deleteCFP, fetchAndStoreEvents, caller } = require("../Controllers/cfpController");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/api/v1/public", require("../Api-Routes/publicRoutes"));

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

async function fetchAndStoreEvents() {
  try {
    const response = await fetch('https://developers.events/all-cfps.json');
    

    var cfpdata = await response.json();
    var currentdate = new Date()
    cfpdata = cfpdata.filter(cfp => new Date(cfp.untilDate) >= currentdate);
    try {
        await Conference.create(cfpdata)
        console.log('data successfully imported')
    } catch (error) {
        console.log("Error:",error)
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

async function deleteCFP(){
  try {
    await Conference.deleteMany({})
  } catch (error) {
    console.log(error)
  }
}

async function caller(){
  try {
    deleteCFP().then(fetchAndStoreEvents());
  } catch (error) {
    console.log(error)
  }
}

connectDB().then(caller());

const job = schedule.scheduleJob('0 3 * * *', function(){
  caller();
})

const port = process.env.PORT;

app.listen(port, () => {
  console.log(
    `server is running in ${process.env.DEV_MODE} mode on port ${process.env.PORT}`
      .bgGreen.bgWhite
  );
});
