const Profile = require("../Models/ProfileModel");


async function fetchAllProfiles(req,res){
    try {
        const Profiles = await Profile.find({});
        if(Profiles){
            res.status(200).send({
                message: "Successfully fetched all Profiles",
                data:Profiles,
                success: true,
            });
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error:"failed to fetch",
            success:false,
        })
    }
}

async function addProfile(req,res) {
    try {

        const newProfile = new Profile(req.body);
        await newProfile.save();
        res.status(200).send({
            messsage:"new profile added",
            success:true
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error:"failed to add new profile",
            success:false,
        })
    }
}

async function getSpecificProfile(req,res) {
    try {
        const specificProfile = Profile.findOne({_id:req.body.userID})
        res.status(200).send({
            message: "fetched profile details of x user",
            success:true,
            data: specificProfile,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            error:"failed to get a specified Profile",
            success:false
        })
    }
}

module.exports = {fetchAllProfiles,addProfile,getSpecificProfile}

