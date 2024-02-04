const Conference = require('../Models/ConferenceModel')


async function fetchAndStoreEvents() {
  try {
    const response = await fetch('https://developers.events/all-cfps.json');
    

    var cfpdata = await response.json();
    var currentdate = new Date()
    cfpdata = cfpdata.filter(cfp => new Date(cfp.untilDate) >= currentdate);
    try {
        await Conference.create(cfpdata)
        console.log('data successfully imported')
        process.exit()
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
      process.exit()
  } catch (error) {
    console.log(error)
  }
}

async function fetchAllCfps(req,res){
    try {
        const Cfps = await Conference.find({});
        if(Cfps){
            res.status(200).send({
                message: "Successfully fetched all Cfps",
                data:Cfps,
                success: true,
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:"failed to fetch",
            success:false,
        })
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
module.exports = {fetchAndStoreEvents,deleteCFP,fetchAllCfps};