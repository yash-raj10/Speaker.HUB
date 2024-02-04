const express = require('express');
const {fetchAllCfps }= require('../Controllers/cfpController');
const { addProfile, fetchAllProfiles, getSpecificProfile } = require('../Controllers/profileController');
const router = express.Router();

router.get('/fetchAllCfps',fetchAllCfps);

router.post('/addprofile',addProfile)

router.get('/fetchAllProfiles',fetchAllProfiles);

router.get('/getSpecificprofile',getSpecificProfile);

module.exports = router;