const express = require('express');
const router = express.Router();

const newsController = require('../app/controller/NewController');

router.use('/', newsController.index);

module.exports = router;
