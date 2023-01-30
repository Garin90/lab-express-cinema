const express = require('express');
const router = express.Router();
const common = require(`${__dirname}/../controllers/common.controller.js`);
const movies = require(`${__dirname}/../controllers/movies.controller.js`);

router.get('/', common.home);
router.get('/movies', movies.list);

module.exports = router;