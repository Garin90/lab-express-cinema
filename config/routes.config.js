const express = require('express');
const router = express.Router();
const common = require(`${__dirname}/../controllers/common.controller.js`); 

router.get('/', common.home);

module.exports = router;