const express = require('express');
const {fetchAllCfps }= require('../Controllers/cfpController')
const router = express.Router();

router.get('/fetchAllCfps',fetchAllCfps);

module.exports = router;